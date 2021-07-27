const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classroomService } = require('../services');

const createClassroom = catchAsync(async (req, res) => {
    const classroom = await classroomService.createClassroom(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', classroom });
});

const getClassrooms = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await classroomService.queryClassrooms(options);
    res.send({ status: true, code: '0000', result });
});

const getClassroom = catchAsync(async (req, res) => {
    const classroom = await classroomService.getClassroomById(req.params.classroomId);
    if(!classroom){
        throw new ApiError(httpStatus.NOT_FOUND, 'Classroom not found');
    }
    res.send({ status: true, code: '0000', classroom });
});

const updateClassroom = catchAsync(async (req, res) => {
    const classroom = await classroomService.updateClassroomById(req.params.classroomId, req.body);
    res.send({ status: true, code: '0000', classroom });
});

const deleteClassroom = catchAsync(async (req, res) => {
    await classroomService.deleteClassroomById(req.params.classroomId);
    res.send({ status: true, code: '0000', message: 'Classroom successfully deleted' });
});

module.exports = {
    createClassroom,
    getClassroom,
    getClassrooms,
    updateClassroom,
    deleteClassroom,
};