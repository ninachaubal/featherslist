'use strict';

// ad-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema({
  text: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const adModel = mongoose.model('ad', adSchema);

module.exports = adModel;
