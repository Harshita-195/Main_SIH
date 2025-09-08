import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

router.post("/", async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: "Failed to add quiz" });
  }
});

export default router;
