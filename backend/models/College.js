import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const College = sequelize.define("College", {
  name: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  district: { type: DataTypes.STRING, allowNull: false },
  university: { type: DataTypes.STRING },
  facilities: { type: DataTypes.STRING },
  medium: { type: DataTypes.STRING }
});

export default College;
