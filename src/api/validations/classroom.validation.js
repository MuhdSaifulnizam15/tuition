
const Joi = require('joi');

const createClassroom = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        programme_module: Joi.string().required(),
        is_active: Joi.boolean(),
        batch: Joi.string(),
        subject: Joi.string().required(),
        tutor: Joi.string().required()
    }),
};

const updateClassroom = {
    params: Joi.object().keys({
        classroomId: Joi.string().required(),
    })
};

const deleteClassroom = {
    params: Joi.object().keys({
        classroomId: Joi.string().required(),
    })
};

module.exports = {
    createClassroom,
    updateClassroom,
    deleteClassroom,
};