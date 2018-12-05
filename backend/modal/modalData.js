const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    itemName :{
            type: String,
            required: true
            },
    color :{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("modalData", dataSchema);//在mongoose collection里
