require('dotenv').config();
const express = require('express');
const cors = require("cors");
const CursoRoute = require("./src/Route/curso.route.js");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/curso", CursoRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
