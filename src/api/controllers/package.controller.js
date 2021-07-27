const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { packageService } = require('../services');

const createPackage = catchAsync(async (req, res) => {
    const package = await packageService.createPackage(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', package });
});

const getPackages = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await packageService.getAllPackage(options);
    res.send({ status: true, code: '0000', result });
});

const getPackage = catchAsync(async (req, res) => {
    const result = await packageService.getPackageById(req.params.packageId);
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND, 'Package not found');
    }
    res.send({ status: true, code: '0000', result });
});

const updatePackage = catchAsync(async (req, res) => {
    const package = await packageService.updatePackageById(req.params.packageId, req.body);
    res.send({ status: true, code: '0000', package });
});

const deletePackage = catchAsync(async (req, res) => {
    await packageService.deletePackageById(req.params.packageId);
    res.send({ status: true, code: '0000', message: 'Package successfully deleted' });
});

module.exports = {
    createPackage,
    getPackage,
    getPackages,
    updatePackage,
    deletePackage,
};