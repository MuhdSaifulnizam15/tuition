const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { dashboardService } = require('../services');

const getDashboardData = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await dashboardService.getDashboardInfo(options);
    res.send({ status: true, code: '0000', result });
});

module.exports = {
    getDashboardData,
}