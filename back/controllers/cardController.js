const Card = require('../models/Card');

exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const card = new Card({ title, description });
        await card.save();
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
