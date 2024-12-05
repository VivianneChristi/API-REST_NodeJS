const express = require('express');
const router = express.Router();
const TransacaoController = require('../controllers/TransacaoController');
const authMiddleware = require('../middlewares/auth');

// Rotas protegidas
router.use(authMiddleware);
router.get('/:idConta', TransacaoController.getTransacoesByConta);
router.post('/', TransacaoController.createTransacao);

module.exports = router;
