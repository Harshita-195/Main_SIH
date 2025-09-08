import express from "express";
import Timeline from "../models/Timeline.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const timelines = await Timeline.findAll();
    res.json(timelines);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch timelines" });
  }
});

router.post("/", async (req, res) => {
  try {
    const timeline = await Timeline.create(req.body);
    res.status(201).json(timeline);
  } catch (err) {
    res.status(400).json({ error: "Failed to add timeline event" });
  }
});

export default router;
