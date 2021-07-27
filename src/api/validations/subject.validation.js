
const Joi = require('joi');
const { password } = require('./custom.validation');

const createSubject = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        code: Joi.string().required(),
    }),
};

const updateSubject = {
    params: Joi.object().keys({
        subjectId: Joi.string().required(),
    })
};

const deleteSubject = {
    params: Joi.object().keys({
        subjectId: Joi.string().required(),
    })
};

module.exports = {
    createSubject,
    updateSubject,
    deleteSubject,
};