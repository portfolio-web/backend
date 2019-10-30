const express = require("express");
const ContactForm = require("../models/contactFormModel");

const contactRouter = express.Router();

contactRouter.route("/contact").post((req, res) => {
  const contactForm = new ContactForm(req.body);

  contactForm.save();
  return res.status(201).json(contactForm);
});

contactRouter.route("/contact/:formID").get((req, res) => {
  ContactForm.findById(req.params.formID, (err, form) => {
    if (err) return res.send(err);

    return res.json(form);
  });
});

module.exports = contactRouter;
