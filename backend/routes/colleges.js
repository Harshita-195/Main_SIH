import express from "express";
import College from "../models/College.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

router.post("/", async (req, res) => {
  try {
    const college = await College.create(req.body);
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: "Failed to add college" });
  }
});

export default router;
