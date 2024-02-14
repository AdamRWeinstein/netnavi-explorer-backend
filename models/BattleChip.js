// DEPENDENCIES
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BattleChipSchema = new Schema({
    chipNo: String,
    name: String,
    element: String,
    codes: [{
        type: String,
        enum: ['*', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']
    }],
    imagePath: String
  },{timestamps: true});
  
  module.exports = mongoose.model("BattleChip", BattleChipSchema);