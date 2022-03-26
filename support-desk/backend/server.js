const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const NODE_ENV = "production";
const path = require("path");

//Connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/tickets", require("./routes/ticketRoutes"));

//Serve Frontend
if (NODE_ENV === "production") {
  //Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Hello",
    });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
