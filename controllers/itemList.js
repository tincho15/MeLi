const getItems  = require('../services/getItems'),
    itemListSchema = require('../models/ItemList');

function itemListController (req, res){
    const { query } = req;
    getItems(query.q)
    .then(async result => {
        const isValidSchema = await itemListSchema.validateAsync(result);
        res.json(result);
    })
    .catch(err => {
        throw new Error(err);
    })
}

module.exports = itemListController;