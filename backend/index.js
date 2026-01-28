const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = "./data.json";

const readDB = () => {
    const data = JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
    if (!data.tasks) data.tasks = {};
    if (!data.lastId) data.lastId = 0;
    return data;
};

const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};
app.get("/tasks", (req, res) => {
    const db = readDB();
    res.json(db.tasks);
});
app.post("/tasks", (req, res) => {
    const db = readDB();
    const id = ++db.lastId;
    db.tasks[id] = {
        id: id,
        title: req.body.title,
        description: req.body.description
    };

    writeDB(db);
    res.json({ success: true });
});

app.delete("/tasks/:id", (req, res) => {
    const db = readDB();
    const id = req.params.id;

    if (!db.tasks[id]) {
        return res.status(404).json({ success: false });
    }
    delete db.tasks[id];
    writeDB(db);
    res.json({ success: true });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
