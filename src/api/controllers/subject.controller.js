const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subjectService } = require('../services');

const createSubject = catchAsync(async (req, res) => {
    const subject = await subjectService.createSubject(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', subject });
});

const getSubjects = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await subjectService.querySubjects(options);
    res.send({ status: true, code: '0000', result });
});

const getSubject = catchAsync(async (req, res) => {
    const subject = await subjectService.getSubjectById(req.params.subjectId);
    if(!subject){
        throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
    }
    res.send({ status: true, code: '0000', subject });
});

const updateSubject = catchAsync(async (req, res) => {
    const subject = await subjectService.updateSubjectById(req.params.subjectId, req.body);
    res.send({ status: true, code: '0000', subject });
});

const deleteSubject = catchAsync(async (req, res) => {
    await subjectService.deleteSubjectById(req.params.subjectId);
    res.send({ status: true, code: '0000', message: 'Subject successfully deleted'});
})

module.exports = {
    createSubject,
    getSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
};