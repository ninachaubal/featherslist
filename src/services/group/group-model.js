'use strict';

// group-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  categories: { type: [mongoose.Schema.Types.ObjectId], ref: 'category' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const groupModel = mongoose.model('group', groupSchema);

module.exports = groupModel;
