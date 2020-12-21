const getDetail = require('../services/getDetail'),
    itemSchema = require('../models/Item');

function itemDetailController (req, res) {
    const { params } = req;
    getDetail(params.id)
    .then(async result => {
        const isValidSchema = await itemSchema.validateAsync(result);
        res.json(result);
    })
    .catch(err =>{
        throw new Error(err);
    })
}

module.exports = itemDetailController;