import { createConnection } from "mysql";

export var db = createConnection({
  port: "3000",
  user: "root",
  host: "localhost",
  password: "Mysql@123",
  database: "music_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB connected");
});
