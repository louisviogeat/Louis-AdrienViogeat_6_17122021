const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: false },
    name: { type: String, required: true, unique: false },
    manufacturer: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false },
    mainPepper: { type: String, required: true, unique: false },
    imageUrl: { type: String, required: true, unique: false },
    heat: { type: Number, required: true, unique: false },
    likes: { type: Number, required: true, unique: false, default: 0 },
    dislikes: { type: Number, required: true, unique: false, default: 0 },
    usersLiked: { type: Array, required: true, unique: false, default: [] },
    usersDisliked: { type: Array, required: true, unique: false, default: [] },
});

module.exports = mongoose.model('Sauce', sauceSchema);