
const Joi = require('joi');

const createCity = {
    body: Joi.object().keys({
        state: Joi.string().required(),
        name: Joi.string().required(),
    }),
};

const updateCity = {
    params: Joi.object().keys({
        cityId: Joi.string().required(),
    })
};

const deleteCity = {
    params: Joi.object().keys({
        cityId: Joi.string().required(),
    })
};

module.exports = {
    createCity,
    updateCity,
    deleteCity,
};