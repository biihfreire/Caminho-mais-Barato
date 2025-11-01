# Caminho Mais Barato: Calculadora de Rotas Econômicas entre Capitais

![Caminho Mais Barato](https://img.shields.io/badge/Caminho_Mais_Barato-Calculadora_de_Rotas-brightgreen)

## 🚀 Visite as Releases
Você pode acessar as versões do projeto [aqui](https://github.com/biihfreire/Caminho-mais-Barato/releases). Baixe e execute o arquivo necessário para testar a aplicação.

## 📚 Descrição do Projeto
O **Caminho Mais Barato** é uma calculadora que determina a rota mais econômica entre as capitais brasileiras. Utilizando o algoritmo de Dijkstra com Heap, a aplicação oferece uma solução eficiente para encontrar o menor custo de viagem entre as cidades.

### 🌟 Recursos
- **Cálculo de rotas**: Encontre a rota mais barata entre as capitais.
- **API REST**: Interaja com a aplicação de forma simples e direta.
- **Frontend em React**: Interface de usuário moderna e responsiva.
- **Backend em Node.js**: Servidor robusto e eficiente.
- **Uso de Grafos**: Representação das capitais e suas distâncias.

## 🛠 Tecnologias Utilizadas
- **JavaScript**: Linguagem principal para o desenvolvimento.
- **Node.js**: Ambiente de execução para o backend.
- **React**: Biblioteca para construção da interface do usuário.
- **JSON**: Formato de dados utilizado para comunicação entre frontend e backend.
- **Dijkstra**: Algoritmo para encontrar o caminho mais curto.
- **Heap**: Estrutura de dados que otimiza o desempenho do algoritmo.

## 🖥 Instalação
Para instalar e executar o projeto, siga os passos abaixo:

### 1. Clone o Repositório
```bash
git clone https://github.com/biihfreire/Caminho-mais-Barato.git
cd Caminho-mais-Barato
```

### 2. Instale as Dependências
No diretório do projeto, execute:
```bash
npm install
```

### 3. Execute o Backend
Para iniciar o servidor backend, use:
```bash
npm start
```

### 4. Execute o Frontend
Em outro terminal, navegue até a pasta do frontend e execute:
```bash
cd frontend
npm start
```

### 5. Acesse a Aplicação
Abra seu navegador e vá até `http://localhost:3000` para ver a aplicação em funcionamento.

## 📊 Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
Caminho-mais-Barato/
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🔍 Como Funciona
O algoritmo de Dijkstra é aplicado para calcular a rota mais barata entre as capitais. As cidades são representadas como nós em um grafo, e as distâncias entre elas como arestas. O algoritmo busca o caminho com o menor custo, levando em conta as diferentes distâncias.

### 🗺 Exemplo de Uso
1. O usuário seleciona duas capitais.
2. A aplicação calcula o custo da viagem.
3. O resultado é exibido na interface.

## 📑 Documentação da API
A API REST permite que você interaja com o sistema. Abaixo estão os principais endpoints:

### 1. Obter Rotas
- **Endpoint**: `/api/rotas`
- **Método**: GET
- **Descrição**: Retorna todas as rotas disponíveis.

### 2. Calcular Rota
- **Endpoint**: `/api/calcular`
- **Método**: POST
- **Descrição**: Calcula a rota mais barata entre duas capitais.
- **Parâmetros**:
  - `origem`: Capital de origem.
  - `destino`: Capital de destino.

### 3. Exemplos de Requisições
#### Obter Rotas
```bash
curl -X GET http://localhost:3000/api/rotas
```

#### Calcular Rota
```bash
curl -X POST http://localhost:3000/api/calcular -H "Content-Type: application/json" -d '{"origem": "São Paulo", "destino": "Rio de Janeiro"}'
```

## 📦 Dependências
O projeto utiliza as seguintes dependências:

- **Express**: Framework para Node.js.
- **Cors**: Middleware para habilitar CORS.
- **Mongoose**: ODM para MongoDB.
- **Axios**: Cliente HTTP para requisições.

## 🧪 Testes
Para garantir a qualidade do código, o projeto inclui testes automatizados. Utilize o seguinte comando para rodar os testes:

```bash
npm test
```

## 📞 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. Para contribuir, siga os passos:

1. Faça um fork do repositório.
2. Crie uma nova branch.
3. Faça suas alterações.
4. Envie um pull request.

## 🌐 Links Úteis
- [Documentação do Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## 📧 Contato
Para mais informações ou dúvidas, entre em contato através do e-mail: biihfreire@example.com.

## 📈 Roadmap
- **Versão 1.0**: Lançamento inicial com funcionalidades básicas.
- **Versão 1.1**: Melhorias na interface do usuário.
- **Versão 1.2**: Implementação de novas rotas e otimizações no algoritmo.

## 🎉 Agradecimentos
Agradecemos a todos que contribuíram para o desenvolvimento deste projeto. Seu apoio é fundamental para o sucesso do **Caminho Mais Barato**.

## 📅 Atualizações
Mantenha-se atualizado com as últimas mudanças visitando a seção de [Releases](https://github.com/biihfreire/Caminho-mais-Barato/releases).

## 🎨 Imagens e Recursos
Aqui estão algumas imagens que representam o tema do projeto:

![Mapa do Brasil](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mapa_do_Brasil.png/800px-Mapa_do_Brasil.png)

![Algoritmo de Dijkstra](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dijkstra_Animation.gif/400px-Dijkstra_Animation.gif)

## 🧩 Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

## 📜 Notas Finais
Para mais informações sobre como usar a aplicação, consulte a documentação ou entre em contato. Agradecemos seu interesse no **Caminho Mais Barato**.