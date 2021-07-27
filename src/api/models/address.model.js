const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const addressSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    office_no: {
        type: String
    }
});

addressSchema.plugin(toJSON);

module.exports = mongoose.model('Address', addressSchema);