import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK_URL,
            scope: ["identify"],
        },
       async (accessToken, refreshToken, profile, done) => {
            try {
                const { id: discord_id, username, email, avatar } = profile;
                let result = await db.query(
                    "SELECT * FROM users WHERE discord_id = $1",
                    [discord_id]
                );

                let user;
                if (result.rows.length === 0) {
                    // User does not exist, create a new user
                    result = await db.query(
                        `INSERT INTO users (discord_id, username, email, avatar)
                         VALUES ($1, $2, $3, $4) RETURNING *`, [discord_id, username, email, avatar]
                    );
                }
                user = result.rows[0];
                return done(null, user);
            } catch (err) {
                console.error(err);
                return done(err, null);
            }
        }
    )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id)); // store DB user ID

passport.deserializeUser(async (id, done) => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  done(null, result.rows[0]);
});
