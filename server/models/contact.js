import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  college: { type: String, required: true },
  gender: { type: String, required: true },
  caste: { type: String },
  mobile_no: { type: String, required: true },
  address: { type: String, required: true },
  year: { type: String, required: true }
}, {
  timestamps: true
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
