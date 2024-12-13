import express from "express";
import cors from "cors";
import userRouter from "./router/user.route.js";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'https://cerulean-boba-ca059b.netlify.app', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Use CORS Middleware
app.use(cors(corsOptions));

// Handle Preflight Requests Globally
app.options('*', cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from userRouter!");
});

app.use("/", userRouter);

export default app;
