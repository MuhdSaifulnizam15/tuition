const express = require('express');
const { classroomController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { classroomValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('manageClassroom'), validate(classroomValidation.createClassroom), classroomController.createClassroom);
router.get('/', auth('getClassrooms'), validate(classroomValidation.getClassrooms), classroomController.getClassrooms);
router.get('/:classroomId', auth('getClassroom'), validate(classroomValidation.getClassroom), classroomController.getClassroom);
router.post('/update/:classroomId', auth('manageClassroom'), validate(classroomValidation.updateClassroom), classroomController.updateClassroom);
router.post('/delete/:classroomId', auth('manageClassroom'), validate(classroomValidation.deleteClassroom), classroomController.deleteClassroom);

module.exports = router;