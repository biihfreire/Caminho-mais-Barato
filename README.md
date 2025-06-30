# Caminho Mais Barato

**Caminho Mais Barato** é uma aplicação web interativa construída com **Node.js** no backend e **React.js** no frontend, que utiliza **algoritmos de grafos** para calcular a rota mais econômica entre duas capitais brasileiras.

Esse sistema considera **distância**, **preço do combustível**, **autonomia do veículo** e **pedágios**, e aplica o algoritmo de **Dijkstra com Heap** para encontrar o trajeto de menor custo total.

---

## Funcionalidades

- Selecionar **cidade de origem e destino**
- Exibir o **caminho mais barato**, considerando:
- Distância entre cidades
- Consumo do veículo (autonomia em km/l)
- Preço do combustível
- Pedágios no caminho
- Apresentar o custo total estimado da viagem
- Interface intuitiva em React

---

##  Algoritmo e Estrutura

- Grafo com:
  - **Capitais como vértices**
  - **Arestas com pesos** calculados por custo total (combustível + pedágios)
- Algoritmo: **Dijkstra com MinHeap**
- Estrutura dos dados baseada em JSON

---

## Tecnologias Utilizadas

### Backend

- **Node.js**
- Estrutura de dados: **MinHeap personalizada**
- Algoritmo: **Dijkstra**

### Frontend

- **React.js**
- **React Router**
- Estilização com **CSS**

---

## Estrutura do Projeto

```plaintext
caminho-mais-barato/
├── backend/
│   ├── controllers/
│   │   └── GrafoController.js      # Funções principais (Dijkstra, montagem do grafo, etc.)
│   ├── routes/
│   │   ├── cidadesRoutes.js        # Define rotas da API (/cidades, /rota, /show)
│   │   └── index.js                # Arquivo que reúne as rotas
│   ├── data/
│   │   └── capitais.json           # Dados com cidades, distâncias e pedágios
│   └── index.js                    # Servidor principal Express
├── frontend/
│   ├── src/
│   │   ├── pages/                  # Páginas da aplicação (Home, Buscar, Cidades, Grafo, etc.)
│   │   ├── components/             # Componentes reutilizáveis
│   │   └── App.js                  # Configuração de rotas React
├── README.md
└── package.json
```

## Como Executar

- Clone o repositório:

```bash
git clone git@github.com:vitor-sramos/Caminho-mais-Barato.git
```

- Backend:

```bash
cd backend
npm install
npm start
```

- Frontend (em outro terminal):

```bash
cd frontend
npm install
npm start
```

- Acesse em: http://localhost:3000

# Exemplo de Uso

Selecione a cidade de origem e destino

Informe a autonomia do carro (km/l) e o preço do combustível

Clique em "Buscar caminho mais barato"

Veja a rota e o custo total estimado com pedágios

# Aprendizados

- Aplicação do algoritmo de Dijkstra em grafos ponderados
- Manipulação de estruturas de dados complexas (MinHeap)
- Integração frontend-backend com React e Node
- Estilização responsiva e navegação com React Router

## Autor

Desenvolvido por Vitor de Souza Ramos
Estudante de Ciência da Computação na UNESC
GitHub: https://github.com/vitor-sramos
LinkedIn: https://www.linkedin.com/in/vitor-ramos-934302349