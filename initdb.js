const sql = require("better-sqlite3");

const db = sql("snippets.db");

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS snippets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    code TEXT NOT NULL
  )
`
).run();

initData();
