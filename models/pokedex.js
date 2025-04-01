// models/fruit.js

const mongoose = require("mongoose");

const dexSchema = new mongoose.Schema ({
    name: String,
    type: String,
    canEvolve: Boolean
});

const Dex = mongoose.model('Dex', dexSchema);
module.exports = Dex;