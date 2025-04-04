import express from "express";
import passport from "passport";

const router = express.Router();

// Redirect to Discord for authentication
router.get("/discord", passport.authenticate("discord"));

// Callback route for Discord to redirect to after authentication
router.get(
    "/discord/callback",
    passport.authenticate("discord", {
        failureRedirect: "http://localhost:3000/",
        successRedirect: "http://localhost:3000/dashboard", // Redirect to your dashboard or home page after successful login
    })
);

// Logout route
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("http://localhost:3000/"); // Redirect to your home page after logout
    });
});

export default router;