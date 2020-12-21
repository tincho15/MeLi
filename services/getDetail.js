const axios = require('axios');

function getDetail(id) {
    let reformattedData = {
        author: {
            name: "Martin",
            lastname: "Alberti"
        },
        item: {}
    };
    const itemData = new Promise((resolve, reject) => {
                axios.get(`https://api.mercadolibre.com/items/${id}`)
                .then(res =>{
                    return res.data;
                })
                .then(async data => {
                    let categories = await axios.get(`https://api.mercadolibre.com/categories/${data.category_id}`)
                        .then(response => {
                            return response.data.path_from_root
                        })
                        .catch(err =>{
                            reject(err);
                        });
                    data.categories = categories.map(cat => cat.name);
                    resolve(data);
                })
                .catch(err =>{
                    reject(err);
                })
            }),
        itemDescription = new Promise((resolve, reject) => {
            axios.get(`https://api.mercadolibre.com/items/${id}/description`)
            .then(res =>{
                resolve(res.data);
            })
            .catch(err =>{
                reject(err);
            })
        })

    return Promise.all([itemData, itemDescription])
        .then(data => {
            const {id, title, price, currency_id, pictures, condition, shipping, sold_quantity, categories} = data[0];
            const {plain_text} = data[1];
            
            reformattedData.item = {
                id,
                title,
                price:{
                    currency: currency_id,
                    amount: price
                },
                categories,
                picture: pictures[0].url,
                condition,
                free_shipping: shipping.free_shipping,
                sold_quantity,
                description: plain_text
            }
            return reformattedData;
        })
        .catch(err => err);
}

module.exports = getDetail;