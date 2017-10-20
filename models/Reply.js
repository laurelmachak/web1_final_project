var mongoose = require('mongoose');

var ReplySchema = new mongoose.Schema({
  response: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reply', ReplySchema);
