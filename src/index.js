const app = require("./app.js");
const { sequelize } = require("./database/database.js");
async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully database.");
    app.listen(4000);
    console.log("Server running port 4000");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
}
main();
