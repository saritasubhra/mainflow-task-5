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

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
