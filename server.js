const express = require("express");
const Stripe = require("stripe");

const app = express();

app.use(express.json());

// A chave secreta será configurada de forma segura depois
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Servidor do Catálogo Moz funcionando!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});