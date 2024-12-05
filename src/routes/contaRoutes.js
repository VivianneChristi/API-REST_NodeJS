const express = require('express');
const router = express.Router();
const ContaController = require('../controllers/ContaController');
const authMiddleware = require('../middlewares/auth');


router.use(authMiddleware);
router.get('/', ContaController.getAllContas);
router.post('/', ContaController.createConta);
router.get('/:id', ContaController.getContaById);
router.put('/:id', ContaController.updateSaldo);
router.delete('/:id', ContaController.deleteConta);

module.exports = router;
