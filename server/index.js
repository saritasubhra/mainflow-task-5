const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 8000;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

mongoose
  .connect("mongodb://localhost:27017/mainflow5", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
  task: String,
  isCompleted: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
app.post("/", async (req, res) => {
  const newTodo = await Todo.create({
    task: req.body.task,
    isCompleted: false,
  });
  res.json(newTodo);
});

app.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
