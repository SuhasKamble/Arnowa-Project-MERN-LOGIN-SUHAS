const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      res.status(404);
      res.json({ error: "Please add all field" });
      return;
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(404);
      res.json({ error: "User already exists with this email" });
      return;
    }

    const user = await User.create({ name, email, mobile });
    if (!user) {
      res.status(404);
      res.json({ error: "Something went wrong" });
      return;
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      res.status(404);
      res.json({ error: "Please add all field" });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404);
      res.json({ error: "Something went wrong user not" });
      return;
    }

    res.status(200).json({ message: "Login Successfull", user });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
});

module.exports = router;
