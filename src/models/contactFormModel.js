const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactFormSchema = new Schema({
  name: { type: String },
  subject: { type: String },
  email: { type: String },
  message: { type: String }
});

const contactFormModel = mongoose.model("ContactForm", contactFormSchema);

module.exports = contactFormModel;
