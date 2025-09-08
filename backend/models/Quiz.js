import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Quiz = sequelize.define("Quiz", {
  question: { type: DataTypes.STRING, allowNull: false },
  options: { type: DataTypes.JSON, allowNull: false },
  correctOption: { type: DataTypes.STRING, allowNull: false }
});

export default Quiz;
