import express from "express";
import  Contact from "../models/contact.js";
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
   
    const {email} =req.body;
      const existEmail = await Contact.findOne({ email }); 
       if (existEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/students", async (req, res) => {
  try {
   const data=await Contact.find();  
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: "Server error  on getting data" });
  }
});

export default router;
