const httpStatus = require('http-status');
const { Package, Address } = require('../models');
const ApiError = require('../utils/ApiError');

const createPackage = async (userBody) => {
    if(await Package.isNameTaken(userBody.name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Package already exist.');
    }
    const package = await Package.create(userBody);
    return package;
};

const getAllPackage = async (options) => {
    options.populate = { path: 'subject_list' };
    const packages = await Package.paginate({}, options);
    return packages;
};

const getPackageById = async (id) => {
    return Package.findById(id).populate({ path: 'subject_list' });
};

const updatePackageById = async (packageId, updateBody) => {
    const package = await getPackageById(packageId);
    if(!package){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Package not found');
    }
    Object.assign(package, updateBody);
    await package.save();
    return package;
};

const deletePackageById = async (packageId) => {
    const package = await getPackageById(packageId);
    if(!package){
        throw new ApiError(httpStatus.NOT_FOUND, 'Package not found');
    }
    await package.remove();
    return package;
};

module.exports = {
    createPackage,
    getAllPackage,
    getPackageById,
    updatePackageById,
    deletePackageById,
};