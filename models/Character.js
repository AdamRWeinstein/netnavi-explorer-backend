// DEPENDENCIES
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    name: String,
    naviName: String,
    characterImagePath: String,
    naviImagePath: String,
    description: String
  },{timestamps: true});
  
  module.exports = mongoose.model("People", CharacterSchema);