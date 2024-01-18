import sql from "better-sqlite3";

const db = sql("snippets.db");

export const getSnippets = () => {
  return db.prepare("SELECT * FROM snippets").all();
};

export const getSnippet = (id) => {
  return db.prepare("SELECT * FROM snippets WHERE id = ?").get(id);
};

export const saveSnippet = (title, code) => {
  const stmt = db.prepare(`
    INSERT INTO snippets (title, code) VALUES (?, ?)
  `);

  const result = stmt.run(title, code);

  if (result.changes > 0) {
    return { success: true, id: result.lastInsertRowid };
  } else {
    return { success: false, error: "Failed to save snippet" };
  }
};
