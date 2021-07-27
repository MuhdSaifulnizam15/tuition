const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { programmeTypes } = require('../../config/constants');
const { toJSON } = require('./plugins');

const classroomSchema = mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        unique: true,
        uppercase: true,
        required: true
    },
    programme_module: {
        type: String,
        enum: [ programmeTypes.MODUL1, programmeTypes.MODUL2, programmeTypes.MODUL3 ],
        required: true
    },
    is_active: {
        type: Boolean,
        default: false
    },
    batch: {
        type: String,
    }
}, {
    timestamps: true   
});

classroomSchema.plugin(toJSON);
classroomSchema.plugin(mongoosePaginate);

classroomSchema.statics.isNameTaken = async function (name, excludeClasroomId) {
    const classroom = await this.findOne({ name, _id: { $ne: excludeClasroomId } });
    return !!classroom;
};

module.exports = mongoose.model('Classroom', classroomSchema);