import express from "express";
/**
 * Config view engine for app
 */
let configViewEngine = (app)=> {
    app.use(express.static("./src/public"));
    app.use(express.static("./src/views"));
    app.set("view engine", "ejs");
    app.set("view engine", "js");
    app.set("views","./src/views");
    
};

module.exports = configViewEngine;
 