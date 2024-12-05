const express = require('express');
const router = express.Router();
const NotificacaoController = require('../controllers/NotificacaoController');
const authMiddleware = require('../middlewares/auth');

// Rotas protegidas
router.use(authMiddleware);
router.get('/:idCliente', NotificacaoController.getNotificacoesByCliente);
router.post('/', NotificacaoController.createNotificacao);

module.exports = router;
