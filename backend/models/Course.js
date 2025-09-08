import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Course = sequelize.define("Course", {
  name: { type: DataTypes.STRING, allowNull: false },
  collegeId: { type: DataTypes.INTEGER, allowNull: false },
  eligibility: { type: DataTypes.STRING },
  duration: { type: DataTypes.STRING },
  fees: { type: DataTypes.STRING },
  mode: { type: DataTypes.STRING }
});

export default Course;
