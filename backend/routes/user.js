const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware");

require("dotenv").config();

const { User, Festival } = require("../db");

const signupBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs!",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken!",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    return res.json({
      token: token,
    });
  }

  res.status(411).json({
    message: "Error while log in!",
  });
});

router.get("/festival", async (req, res) => {
  try {
    const festivals = await Festival.find({}, "festivalName description date");
    res.json(festivals);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

router.post("/festival", async (req, res) => {
  try {
    const { festivalName, description, date } = req.body;

    const festivalDate = new Date(date);

    const newFestival = await Festival.create({
      festivalName,
      description,
      date: festivalDate,
    });

    res.status(201).json({
      message: "Festival added!",
      festival: newFestival,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding festival",
      error,
    });
  }
});

module.exports = router;
