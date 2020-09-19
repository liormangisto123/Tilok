const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const db = require('../db');


const schema = mongoose.Schema;

const comments_HistorySchema = new schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    tourGuideID: { type: schema.Types.ObjectId, ref: "guides" }

});


const touristSchema = new schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
    comments_History: [comments_HistorySchema],

})

const tourist = new mongoose.model("tourists", touristSchema);
module.exports = tourist;

