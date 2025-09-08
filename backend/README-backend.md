# Backend (Express) — README

## Overview
This simple Express backend serves static JSON files as APIs to demonstrate functionality.

## Install & Run
1. Node.js (v16+) installed.
2. From `backend/`:
   - `npm install`
   - `npm run dev` (requires nodemon) or `npm start`

APIs:
- GET /api/health
- GET /api/colleges
- GET /api/colleges/:id
- GET /api/quiz
- POST /api/quiz/submit  (body: { answers: ["science","arts"] })
- GET /api/timelines

