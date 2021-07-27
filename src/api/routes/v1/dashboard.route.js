const express = require('express');
const { dashboardController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', auth('getDashboard'), dashboardController.getDashboardData);

module.exports = router;