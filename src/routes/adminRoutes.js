const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Rota pública para login
router.post('/login', AdminController.loginAdmin);

// Rotas protegidas
const authMiddleware = require('../middlewares/auth');
router.use(authMiddleware);
router.get('/clientes', AdminController.getAllClientes);

module.exports = router;
