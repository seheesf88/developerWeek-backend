const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {type: String},//number
  leftQty: {type: String},//number
  discount: {type: String},//%?
});

module.exports = mongoose.model('Item', itemSchema)
