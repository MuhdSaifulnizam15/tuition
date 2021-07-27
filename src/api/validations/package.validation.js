
const Joi = require('joi');

const createPackage = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        total_subject: Joi.number().required(),
        education_level: Joi.string(),
        price: Joi.number(),
    }),
};

const updatePackage = {
    params: Joi.object().keys({
        packageId: Joi.string().required(),
    })
};

const deletePackage = {
    params: Joi.object().keys({
        packageId: Joi.string().required(),
    })
};

module.exports = {
    createPackage,
    updatePackage,
    deletePackage,
};