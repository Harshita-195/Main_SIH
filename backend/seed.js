// seed.js
import { Sequelize } from "sequelize";
import College from "./models/College.js";
import Course from "./models/Course.js";
import Quiz from "./models/Quiz.js";
import Timeline from "./models/Timeline.js";
import sequelize from "./config/db.js";
// make sure your sequelize instance is imported

const seed = async () => {
  try {
    // Sync database (drops all tables first)
    await sequelize.sync({ force: true });
    console.log("Database synced successfully.");

    // ----------- COLLEGES -----------
    const colleges = await College.bulkCreate([
      {
        name: "Government College Ghaziabad",
        state: "Uttar Pradesh",
        district: "Ghaziabad",
        university: "Dr. A.P.J. Abdul Kalam University",
        facilities: "Library, Labs, Hostel",
        medium: "English"
      },
      {
        name: "Government College Lucknow",
        state: "Uttar Pradesh",
        district: "Lucknow",
        university: "University of Lucknow",
        facilities: "Library, Sports, Hostel",
        medium: "English"
      }
    ], { returning: true });
    console.log("Colleges seeded.");

    // ----------- COURSES -----------
    await Course.bulkCreate([
      { name: "B.Sc", eligibility: "12th Science", duration: "3 Years", collegeId: colleges[0].id },
      { name: "B.A", eligibility: "12th Arts", duration: "3 Years", collegeId: colleges[1].id },
      { name: "B.Com", eligibility: "12th Commerce", duration: "3 Years", collegeId: colleges[0].id }
    ]);
    console.log("Courses seeded.");

    // ----------- QUIZZES -----------
    await Quiz.bulkCreate([
      {
        question: "What is your favorite subject?",
        options: JSON.stringify(["Science", "Arts", "Commerce"]),
        correctOption: "Science"
      },
      {
        question: "Do you prefer theory or practical?",
        options: JSON.stringify(["Theory", "Practical"]),
        correctOption: "Practical"
      }
    ]);
    console.log("Quizzes seeded.");

    // ----------- TIMELINES -----------
    await Timeline.bulkCreate([
      {
        event: "Application Open",
        date: new Date("2025-10-01"),
        description: "Applications for the new session open."
      },
      {
        event: "Application Close",
        date: new Date("2025-10-31"),
        description: "Last date to submit applications."
      }
    ]);
    console.log("Timelines seeded.");

    console.log("✅ Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();
