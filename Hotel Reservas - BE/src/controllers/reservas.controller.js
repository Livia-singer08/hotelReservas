const prisma = require("../data/prisma");

const cadastrarReserva = async (req, res) => {
    const data = req.body;

    data.dataEntrada = new Date(data.dataEntrada);
    data.dataSaida = new Date(data.dataSaida);

    const reserva = await prisma.reserva.create({
        data: {
            ...data,
            quartoId: Number(data.quartoId)
        }
    });

    res.status(201).json(reserva);
};

const listarReservas = async (req, res) => {
    const reservas = await prisma.reserva.findMany({
        include: {
            quarto: true
        }
    });

    res.status(200).json(reservas);
};

const buscarReservas = async (req, res) => {
    const { id } = req.params;

    const reserva = await prisma.reserva.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            quarto: true
        }
    });

    res.status(200).json(reserva);
};

const atualizarReserva = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const reserva = await prisma.reserva.update({
        where: {
            id: Number(id)
        },
        data
    });

    res.status(200).json(reserva);
};

const excluirReserva = async (req, res) => {
    const { id } = req.params;

    const reserva = await prisma.reserva.delete({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json("Reserva excluída com sucesso!");
};

module.exports = {
    cadastrarReserva,
    listarReservas,
    buscarReservas,
    atualizarReserva,
    excluirReserva
};