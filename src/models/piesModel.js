//piesModel.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./AppDb.db");

const createPiesTable = () => {
  db.run(
    "CREATE TABLE IF NOT EXISTS pies (pie_id INTEGER PRIMARY KEY AUTOINCREMENT, pie_name TEXT, price INTEGER, diet TEXT)"
  );
};

const getAllPies = (callback) => {
  db.all("SELECT * FROM pies", callback);
};

module.exports = {
  createPiesTable,
  getAllPies,
};
