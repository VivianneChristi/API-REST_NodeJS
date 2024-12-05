const { Cliente } = require('../models');

exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
};

exports.createCliente = async (req, res) => {
  const { Nome_Cliente, Email } = req.body;
  try {
    const cliente = await Cliente.create({ Nome_Cliente, Email });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar cliente.' });
  }
};
