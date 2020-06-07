const mongoose = require("mongoose");

const publicacionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  imgProfile: { type: String },
});

module.exports = mongoose.model("Publicacion", publicacionSchema);
