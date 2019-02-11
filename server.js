// Require NPM packages Express and Path
const express = require("express");
const path = require("path");

// Set up Express server app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link to data

// Link to routes

// Server listener