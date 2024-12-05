const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const contaRoutes = require('./routes/contaRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');
const notificacaoRoutes = require('./routes/notificacaoRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

// Configuração das rotas
app.use('/clientes', clienteRoutes);
app.use('/contas', contaRoutes);
app.use('/transacoes', transacaoRoutes);
app.use('/notificacoes', notificacaoRoutes);
app.use('/admin', adminRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
