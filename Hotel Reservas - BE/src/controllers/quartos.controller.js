const prisma = require("../data/prisma");

const cadastrarQuarto = async (req, res) => {
    const data = req.body;

    const quarto = await prisma.quarto.create({
        data
    });

    res.status(201).json(quarto);
};

const listarQuartos = async (req, res) => {
    const quartos = await prisma.quarto.findMany({
        include: {
            reservas: true
        }
    });

    res.status(200).json(quartos);
};

const buscarQuartos = async (req, res) => {
    const { id } = req.params;

    const quarto = await prisma.quarto.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            reservas: true
        }
    });

    res.status(200).json(quarto);
};

const atualizarQuarto = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const quarto = await prisma.quarto.update({
        where: {
            id: Number(id)
        },
        data
    });

    res.status(200).json(quarto);
};

const excluirQuarto = async (req, res) => {
    const { id } = req.params;

    const quarto = await prisma.quarto.delete({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json("Quarto excluído com sucesso!");
};

module.exports = {
    cadastrarQuarto,
    listarQuartos,
    buscarQuartos,
    atualizarQuarto,
    excluirQuarto
};