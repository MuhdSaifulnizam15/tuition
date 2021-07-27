const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');

const packageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    total_subject: {
        type: Number,
        required: true,
    },
    education_level: {
        type: String,
    },
    price: {
        type: Number,
    },
    subject_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

packageSchema.plugin(toJSON);
packageSchema.plugin(mongoosePaginate);

packageSchema.statics.isNameTaken = async function (name, excludePackageId) {
    const city = await this.findOne({ name, _id: { $ne: excludePackageId }});
    return !!city;
};

module.exports = mongoose.model('Package', packageSchema);