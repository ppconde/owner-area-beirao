const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile("./landing.html", { root: __dirname }));
app.get("/*", (req, res) => res.sendFile(req.path, { root: __dirname }));

app.listen(process.env.PORT || 5000);
