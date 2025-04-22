const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  Institute: { type: String, required: true },
  "Academic Program Name": { type: String, required: true },
  Quota: { type: String, required: true },
  "Seat Type": { type: String, required: true },
  Gender: { type: String, required: true },
  "Opening Rank": { type: Number, required: true },
  "Closing Rank": { type: Number, required: true },
  Tier: { type: String, required: true },
  State: { type: String, required: true },
  "Exam Type": { type: String, required: true },
  Percentile: { type: Number, required: true },
  Marks: { type: Number, required: true },
});

const Institute = mongoose.model('College', instituteSchema);

module.exports = Institute;
