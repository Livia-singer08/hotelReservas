const express = require("express");
const router = express.Router();

const controller = require("../controllers/reservas.controller");

router.get("/listar", controller.listarReservas);
router.get("/buscar/:id", controller.buscarReservas);
router.post("/cadastrar", controller.cadastrarReserva);
router.put("/atualizar/:id", controller.atualizarReserva);
router.delete("/excluir/:id", controller.excluirReserva);

module.exports = router;