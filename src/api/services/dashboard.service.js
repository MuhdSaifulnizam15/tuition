const httpStatus = require('http-status');
const { Classroom, Assignment, Quiz } = require('../models');
const ApiError = require('../utils/ApiError');

const getDashboardInfo = async (options) => {
    const result = {};
    const totalClassroom = await Classroom.find().count();
    const totalAssignment = await Assignment.find().count();
    const totalQuiz = await Quiz.find().count();
    result.totalClassroom = totalClassroom;
    result.totalAssignment = totalAssignment;
    result.totalQuiz = totalQuiz;
    return result;
};

module.exports = {
    getDashboardInfo,
}