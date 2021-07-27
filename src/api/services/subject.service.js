const httpStatus = require('http-status');
const { Subject } = require('../models');
const ApiError = require('../utils/ApiError');

const createSubject = async (userBody) => {
    if(await Subject.isCodeTaken(userBody.code)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Code already taken');
    }
    const subject = await Subject.create(userBody);
    return subject;
};

const querySubjects = async (options) => {
    const subjects = await Subject.paginate({}, options);
    return subjects;
};

const getSubjectById = async (id) => {
    return Subject.findById(id);
};

const getSubjectByName = async (name) => {
    return Subject.findOne({ name });
};

const updateSubjectById = async (subjectId, updateBody) => {
    const subject = await getSubjectById(subjectId);
    if(!subject){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Subject not found');
    }
    Object.assign(subject, updateBody);
    await subject.save();
    return subject;
};

const deleteSubjectById = async (subjectId) => {
    const subject = await getSubjectById(subjectId);
    if(!subject){
        throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
    }
    await subject.remove();
    return subject;
}

module.exports = {
    createSubject,
    querySubjects,
    getSubjectById,
    getSubjectByName,
    updateSubjectById,
    deleteSubjectById,
};