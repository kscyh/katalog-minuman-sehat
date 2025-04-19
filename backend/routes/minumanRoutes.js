const express = require('express');
const router = express.Router();
const minumanController = require('../controllers/minumanController');
const validateInput = require('../middlewares/validateInput');

router.get('/', minumanController.getAllMinuman);
router.get('/:id', minumanController.getMinumanById);
router.post('/', validateInput, minumanController.addMinuman);
router.put('/:id', validateInput, minumanController.updateMinuman);
router.delete('/:id', minumanController.deleteMinuman);

module.exports = router;
