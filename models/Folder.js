// DEPENDENCIES
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const BattleChip = require('./BattleChip')

const FolderSchema = new Schema({
    userCode: String,
    name: String,
    battleChips: [
        {
            type: Schema.Types.ObjectId,
            ref: BattleChip
        }
    ]
  },{timestamps: true});
  
  module.exports = mongoose.model("Folder", FolderSchema);