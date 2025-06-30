const router = require("express").Router();
const { showGrafo, listaCidades, calcularCaminhoMaisBarato} = require("../controllers/GrafoController");

router.get("/cidades", (req, res) => {
    const cidades = listaCidades();
    res.json(cidades);
})

router.get("/show", (req, res) => {
    res.json(showGrafo);
})

router.get("/rota", (req, res) => {
  const { origem, destino, preco, autonomia } = req.query;
  console.log("Parâmetros recebidos:", { origem, destino, preco, autonomia });
  const resultado = calcularCaminhoMaisBarato(origem, destino, parseFloat(preco), parseFloat(autonomia));
  res.json(resultado);
});

module.exports = router;