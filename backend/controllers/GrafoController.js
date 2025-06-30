// controllers/GrafoController.js
const data = require("../db/capitais.json");

function listaCidades() {
  return data.map((cidadeObj) => Object.keys(cidadeObj)[0]).sort();
}

class Cidade {
  constructor(nome, pedagio) {
    this.nome = nome;
    this.pedagio = pedagio;
    this.vizinhos = {}; // { nomeVizinho: distancia }
  }

  adicionarVizinho(vizinho, distancia) {
    this.vizinhos[vizinho] = distancia;
  }
}

class Grafo {
  constructor() {
    this.cidades = {};
  }

  seedFromJson() {
    const dados = data;

    dados.forEach((item) => {
      const nomeCidade = Object.keys(item)[0];
      const dadosCidade = item[nomeCidade];

      if (!this.cidades[nomeCidade]) {
        this.cidades[nomeCidade] = new Cidade(nomeCidade, dadosCidade.toll);
      } else {
        if (this.cidades[nomeCidade].pedagio === 0) {
          this.cidades[nomeCidade].pedagio = dadosCidade.toll;
        }
      }

      for (const [vizinho, distancia] of Object.entries(
        dadosCidade.neighbors
      )) {
        if (!this.cidades[vizinho]) {
          this.cidades[vizinho] = new Cidade(vizinho, 0);
        }
        this.cidades[nomeCidade].adicionarVizinho(vizinho, distancia);
      }
    });
  }

  show() {
    const resultado = [];

    for (const cidadeNome in this.cidades) {
      const cidade = this.cidades[cidadeNome];
      const vizinhos = Object.entries(cidade.vizinhos)
        .map(([nome, dist]) => `${nome} (${dist} km)`)
        .join(", ");

      resultado.push({
        nome: cidade.nome,
        pedagio: cidade.pedagio,
        vizinhos: vizinhos,
      });
    }
    return resultado;
  }

  caminhoMaisBarato(origem, destino, precoCombustivel, autonomia) {
    const distancias = {};
    const visitados = new Set();
    const anteriores = {};
    const custos = {};

    for (const cidade in this.cidades) {
      distancias[cidade] = Infinity;
      custos[cidade] = Infinity;
    }

    distancias[origem] = 0;
    custos[origem] = 0;

    const fila = [[0, origem]]; // [custoTotal, cidade]

    while (fila.length > 0) {
      fila.sort((a, b) => a[0] - b[0]);
      const [custoAtual, cidadeAtual] = fila.shift();

      if (visitados.has(cidadeAtual)) continue;
      visitados.add(cidadeAtual);

      for (const vizinho in this.cidades[cidadeAtual].vizinhos) {
        const distancia = this.cidades[cidadeAtual].vizinhos[vizinho];

        const custoCombustivel = (distancia / autonomia) * precoCombustivel;
        const custoPedagio = vizinho === destino ? 0 : this.cidades[vizinho].pedagio;
        const custoTotal = custoAtual + custoCombustivel + custoPedagio;

        if (custoTotal < custos[vizinho]) {
          custos[vizinho] = custoTotal;
          distancias[vizinho] = distancias[cidadeAtual] + distancia;
          anteriores[vizinho] = cidadeAtual;
          fila.push([custoTotal, vizinho]);
        }
      }
    }

    if (custos[destino] === Infinity) {
      return { mensagem: "Rota inexistente." };
    }

    const caminho = [];
    let atual = destino;
    while (atual) {
      caminho.unshift(atual);
      atual = anteriores[atual];
    }


    return {
      caminho,
      custoTotal: custos[destino].toFixed(2),
    };
  }
}

const grafo = new Grafo();
grafo.seedFromJson();
const showGrafo = grafo.show();

function calcularCaminhoMaisBarato(origem, destino, precoCombustivel, autonomia) {
  return grafo.caminhoMaisBarato(origem, destino, precoCombustivel, autonomia);
}

module.exports = { showGrafo, listaCidades, calcularCaminhoMaisBarato };
