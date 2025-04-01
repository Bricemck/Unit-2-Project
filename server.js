// Variables 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const morgan = require("morgan");

// Load Express & Mongoose
const app = express();
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

const Dex = require('./models/pokedex.js')

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method")); 
app.use(morgan("dev")); 

//Controller functions
const dexCtrl = require('./controllers/pokedex');

app.get('/', dexCtrl.home);
app.get('/pokedex/new', dexCtrl.showNewForm);
app.post('/pokedex', dexCtrl.create);
app.get('/pokedex', dexCtrl.index);
app.get('/pokedex/:DexId', dexCtrl.show);
app.delete('/pokedex/:DexId', dexCtrl.remove);
app.get('/pokedex/:DexId/edit', dexCtrl.edit);
app.put('/pokedex/:DexId', dexCtrl.update);

app.listen (3002, () => {
    console.log('Port 3002');
});























// Routes pre MVC

// app.get('/', async (req, res) => {
//     res.render('index.ejs');
// });

// app.get("/pokedex", async (req, res) => {
//     const seenPokemon = await Dex.find();
//     res.render("pokedex/index.ejs", { Dex: seenPokemon }
//     );
// });

// app.get('/pokedex/new', (req, res) => {
//     res.render("pokedex/new.ejs");
// });

// app.get("/pokedex/:DexId", async (req, res) => {
//     const pokemonDetailPage = await Dex.findById(req.params.DexId);
//     res.render(`pokedex/show.ejs`, { Dex: pokemonDetailPage });
// });

// app.post("/pokedex", async (req, res) => {
//     if (req.body.canEvolve === "on") {
//         req.body.canEvolve = true;
//     } else {
//         req.body.canEvolve = false;
//     }
//     await Dex.create(req.body);
//     res.redirect("/pokedex");
// });


// app.delete('/pokedex/:DexId', async (req, res) => {
//     await Dex.findByIdAndDelete(req.params.DexId);
//     res.redirect('/pokedex');
// });

// app.get("/pokedex/:DexId/edit", async (req, res) => {
//     const editEntry = await Dex.findById(req.params.DexId);
//     console.log(editEntry);
//     res.render("pokedex/edit.ejs", {
//         Dex: editEntry
//     });
// });

// app.put("/pokedex/:DexId", async (req, res) => {
//     if (req.body.canEvolve === "on") {
//         req.body.canEvolve = true;
//     } else {
//         req.body.canEvolve = false;
//     }
//     await Dex.findByIdAndUpdate(req.params.DexId, req.body);
//     res.redirect(`/pokedex/${req.params.DexId}`)
// });