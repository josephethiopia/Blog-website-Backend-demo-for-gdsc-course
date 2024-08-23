import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

// MongoDB connection URI
const MONGO_URI =
  "mongodb+srv://admin:admin.0596@moti.fhkz5xa.mongodb.net/?retryWrites=true&w=majority&appName=Moti";

// Function to start the server
const startServer = () => {
  app.listen(5000, () => {
    console.log("The server is ready to serve on port 5000");
  });
};

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    startServer();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with a failure code
  });
