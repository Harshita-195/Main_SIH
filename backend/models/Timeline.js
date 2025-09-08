import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Timeline = sequelize.define("Timeline", {
  event: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  description: { type: DataTypes.STRING }
});

export default Timeline;
