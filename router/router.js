const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/cadastrar", (req, res) => {
  res.render("cadastrar");
});

router.post("/cadastrar", (req, res) => {
  User.create({
    cpf: req.body.cpf,
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    ano:req.body.ano,
    area: req.body.area,
    curso: req.body.curso,
  }).then(() => {
    res.redirect("/");
  });
});

router.get("/listar", (req, res) => {
  User.findAll().then((dados) => {
    res.render("usuario", { usuarios: dados });
  });
});

router.get("/deletar/:cpf", (req, res) => {
  User.destroy({
    where: { cpf: req.params.cpf },
  }).then(() => {
    res.redirect("/listar");
  });
});

router.get("/atualizar/:cpf/:nome", (req, res) => {
  res.render("atualizar", {
    dados: { cpf: req.params.cpf, nome: req.params.nome },
  });
});

router.post("/editar", (req, res) => {
  User.update({ nome: req.body.nome }, { where: { cpf: req.body.cpf } }).then(
    () => {
      res.redirect("/listar");
    }
  );
});

module.exports = router;