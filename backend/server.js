import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';

import College from './models/College.js';
import Course from './models/Course.js';
import Quiz from './models/Quiz.js';
import Timeline from './models/Timeline.js';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Colleges Routes
app.get('/api/colleges', async (req, res) => {
  const city = req.query.city;
  try {
    const whereClause = city ? { state: city } : {};
    const colleges = await College.findAll({ where: whereClause });
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch colleges' });
  }
});

app.get('/api/colleges/:id', async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch college' });
  }
});

// Courses Route
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Quizzes Route
app.get('/api/quiz', async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

// Submit Quiz Answers & Recommend Streams
app.post('/api/quiz/submit', (req, res) => {
  const answers = req.body.answers || [];
  const score = { science: 0, commerce: 0, arts: 0, vocational: 0 };

  answers.forEach(a => {
    if (a === 'science') score.science++;
    if (a === 'commerce') score.commerce++;
    if (a === 'arts') score.arts++;
    if (a === 'vocational') score.vocational++;
  });

  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const recommended = sorted.map(s => s[0]);

  res.json({ score, recommended });
});

// Timelines Route
app.get('/api/timelines', async (req, res) => {
  try {
    const timelines = await Timeline.findAll();
    res.json(timelines);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch timelines' });
  }
});

// Root route
app.get('/', (req, res) => res.send('Digital Guidance Platform Backend is running 🚀'));

// DB Connection and Server Start
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.error('❌ DB connection error:', err));

sequelize.sync()
  .then(() => console.log('✅ Models synced with DB'))
  .catch(err => console.error('❌ Sync error:', err));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
