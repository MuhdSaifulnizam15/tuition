const httpStatus = require('http-status');
const { Classroom } = require('../models');
const ApiError = require('../utils/ApiError');

const createClassroom = async (userBody) => {
    if(await Classroom.isNameTaken(userBody.name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'name already exist. Please use different class name.');
    }
    const classroom = await Classroom.create(userBody);
    return classroom;
};

const queryClassrooms = async (options) => {
    options.populate = ['subject', 'tutor'];
    const classrooms = await Classroom.paginate({}, options);
    return classrooms;
};

const getClassroomById = async (id) => {
    return Classroom.findById(id).populate(['subject','tutor']);
};

const getClassroomByTutorId = async (id) => {
    return Classroom.find({ tutor: id }).populate(['subject','tutor']);
}

const updateClassroomById = async (classroomId, updateBody) => {
    const classroom = await getClassroomById(classroomId);
    if(!classroom){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Classroom not found');
    }
    Object.assign(classroom, updateBody);
    await classroom.save();
    return classroom;
};

const deleteClassroomById = async (classroomId) => {
    const classroom = await getClassroomById(classroomId);
    if(!classroom){
        throw new ApiError(httpStatus.NOT_FOUND, 'Classroom not found');
    }
    await classroom.remove();
    return classroom;
};

module.exports = {
    createClassroom,
    queryClassrooms,
    getClassroomById,
    getClassroomByTutorId,
    updateClassroomById,
    deleteClassroomById,
};