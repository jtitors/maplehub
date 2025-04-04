import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import "./auth.js"; // Import the auth configuration
import authRoutes from "./routes/auth.js";
import pool from "./db.js"; // Import the database connection

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("MapleHub backend running");
});

app.get("/users", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM users;");
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed" });
    }
  });

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
