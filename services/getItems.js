const axios = require('axios');

function getItems(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(res =>{
            let reformattedData = {
                author: {
                    name: "Martin",
                    lastname: "Alberti"
                },
                categories: [],
                items: []
            }

            reformattedData.categories = res.data.filters[0] ? 
                                        res.data.filters[0].values[0].path_from_root.map(category => category.name)
                                        :
                                        [];

            res.data.results.map(product => {
                const {id, title, price, currency_id, thumbnail, condition, shipping, address} = product;
                let item = {
                    id,
                    title,
                    price: {
                        currency: currency_id,
                        amount: price
                    },
                    picture: thumbnail,
                    location: address.state_name,
                    condition,
                    free_shipping: shipping.free_shipping
                }
                reformattedData.items.push(item);
            })
            return reformattedData;
        })
        .then(list => {
            resolve(list)
        })
        .catch(err =>{
            reject(err);
        })
    })
}

module.exports = getItems;