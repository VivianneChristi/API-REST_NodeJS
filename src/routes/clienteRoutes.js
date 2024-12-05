const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');
const validateCliente = require('../middlewares/validateCliente');
const authMiddleware = require('../middlewares/auth');


router.get('/', ClienteController.getAllClientes);
router.post('/', validateCliente, ClienteController.createCliente);


router.use(authMiddleware); 
router.get('/:id', ClienteController.getClienteById);
router.put('/:id', validateCliente, ClienteController.updateCliente);
router.delete('/:id', ClienteController.deleteCliente);

module.exports = router;
