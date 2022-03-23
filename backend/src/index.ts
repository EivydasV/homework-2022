import express from "express";
import cors from "cors";
import { autoComplete } from "./controllers/autoComplete.controller";

const app = express();
const port = 3001;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.get("/", (_req, res) => {
    res.send(
        "<h1>Congratulations 🎉 You got the WCC 2022 backend server running. Good luck with your task 🙌</h1>"
    );
});

/**
 * Example endpoint
 *  consumes: query parameter "name"
 *  returns: a JSON response
 */
app.get("/greeting", (req, res) => {
    res.json({ greeting: `Hello, ${req.query.name || "World"} 👋` });
});

/**
 * TODO: Add your autocompleter endpoint below this component
 */

app.get("/autocomplete", autoComplete);

app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}.`);
});
