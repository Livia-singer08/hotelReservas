const express = require("express");
const router = express.Router();

const controller = require("../controllers/quartos.controller");

router.get("/listar", controller.listarQuartos);
router.get("/buscar/:id", controller.buscarQuartos);
router.post("/cadastrar", controller.cadastrarQuarto);
router.put("/atualizar/:id", controller.atualizarQuarto);
router.delete("/excluir/:id", controller.excluirQuarto);

module.exports = router;