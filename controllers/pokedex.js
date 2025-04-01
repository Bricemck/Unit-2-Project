const dexCon = require('../models/pokedex');
const index = async (req, res) => {
    const seenPokemon = await Dex.find();
    res.render("pokedex/index.ejs", { Dex: seenPokemon });
};
const show = async (req, res) => {
    const pokemonDetailPage = await Dex.findById(req.params.DexId);
    res.render(`pokedex/show.ejs`, { Dex: pokemonDetailPage });
};
// const create = createLogic;
// const update = updateLogic;
// const delete = deleteLogic;
// const showNewForm = newFormLogic;
// const edit = editLogic;




module.exports = {
    index,
    show,
    // create,
    // update,
    // delete,
    // showNewForm,
    // edit,
};