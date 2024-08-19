const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardController');

router.post('/cards', cardsController.createCard);
router.get('/cards', cardsController.getAllCards);
router.get('/cards/:title', cardsController.getCardByTitle);

module.exports = router;
