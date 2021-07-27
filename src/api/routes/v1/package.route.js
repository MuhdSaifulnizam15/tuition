const express = require('express');
const { packageController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { packageValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('managePackage'), validate(packageValidation.createPackage), packageController.createPackage);
router.get('/', auth('getPackages'), validate(packageValidation.getPackages), packageController.getPackages);
router.get('/:packageId', auth('getPackage'), validate(packageValidation.getPackage), packageController.getPackage);
router.post('/update/:packageId', auth('managePackage'), validate(packageValidation.updatePackage), packageController.updatePackage);
router.post('/delete/:packageId', auth('managePackage'), validate(packageValidation.deletePackage), packageController.deletePackage);

module.exports = router;