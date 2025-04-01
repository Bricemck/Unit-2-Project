const dexCon = require('../models/pokedex');

const home = async (req, res) => {
    res.render('index.ejs');
};

const index = async (req, res) => {
    const seenPokemon = await dexCon.find();
    res.render("pokedex/index.ejs", { Dex: seenPokemon });
};

const show = async (req, res) => {
    const pokemonDetailPage = await dexCon.findById(req.params.DexId);
    res.render(`pokedex/show.ejs`, { Dex: pokemonDetailPage });
};

const showNewForm = async (req, res) => {
    res.render("pokedex/new.ejs");
};

const create = async (req, res) => {
    // req.body.canEvolve = req.body.canEvolve ==="on";
        if (req.body.canEvolve === "on") {
            req.body.canEvolve = true;
        } else {
            req.body.canEvolve = false;
        }
        await dexCon.create(req.body);
        res.redirect("/pokedex");
};

const remove = async (req, res) => {
    await dexCon.findByIdAndDelete(req.params.DexId);
    res.redirect('/pokedex');
};

const edit = async (req, res) => {
    const editEntry = await dexCon.findById(req.params.DexId);
    console.log(editEntry);
    res.render("pokedex/edit.ejs", {
        dexCon: editEntry
    });
};

const update = async (req, res) => {
    if (req.body.canEvolve === "on") {
        req.body.canEvolve = true;
    } else {
        req.body.canEvolve = false;
    }
    await dexCon.findByIdAndUpdate(req.params.DexId, req.body);
    res.redirect(`/pokedex/${req.params.DexId}`)
};

module.exports = {
    home,
    index,
    show,
    create,
    update,
    remove,
    showNewForm,
    edit,
};

