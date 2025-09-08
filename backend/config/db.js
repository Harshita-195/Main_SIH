import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sih", "postgres", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
