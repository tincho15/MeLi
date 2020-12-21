const Joi = require('joi');

const itemListSchema = Joi.object({
    author: Joi.object({
        name: Joi.string(),
        lastname: Joi.string()
    }),
    categories: Joi.array().items(Joi.string()),
    items: Joi.array().items(
        Joi.object({
            id: Joi.string(),
            title: Joi.string(),
            price: Joi.object({
                currency: Joi.string(),
                amount: Joi.number(),
                decimals: Joi.number()
            }),
            picture: Joi.string(),
            location: Joi.string(),
            condition: Joi.string(),
            free_shipping: Joi.boolean()
        })
    )
})

module.exports = itemListSchema;