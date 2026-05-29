const express = require("express");

const route = express.Router();

const { listar, listar_por_nome, criar, deletar } = require("../controllers/curso.controllers.js");

route.get("/listar", listar);
route.get("/listar/:nome", listar_por_nome);
route.post("/criar", criar);
route.delete("/deletar/:id", deletar);

module.exports = route;