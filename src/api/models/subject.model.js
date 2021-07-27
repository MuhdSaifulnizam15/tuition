const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
}, {
    timestamps: true,
});

subjectSchema.plugin(toJSON);
subjectSchema.plugin(mongoosePaginate);

subjectSchema.statics.isCodeTaken = async function (code, excludeSubjectId) {
    const subject = await this.findOne({ code, _id: { $ne: excludeSubjectId } });
    return !!subject;
};

module.exports = mongoose.model('Subject', subjectSchema);