const express = require("express");
const connectDB = require("./bd/connect");
const dotenv = require('dotenv').config();

const app = express()

// connection à la DB
connectDB()

// Middelware qui permet de traiter les données du la requiest
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// chemain vers les routes
app.use("/api", require("./route/post.routes"))



// lancer le serveur
app.listen(3000);
console.log("Attente des requêtes au port 3000");
