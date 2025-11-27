const express = require ("express");
const app= express();
const port = 3000;

// Indicar para express ler body com json
app.use(express.json());

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// Criando funções auxiliares para o time
// Retornar o objeto por id
function buscarTimePorId(id) {
    return times.filter((time) => time.id == id)
};

function buscarIdTime(id) {
    return times.findIndex((time) => time.id == id)
};

//---------------------------------------------------------------

// Criando funções auxiliares para nomes
// Retornar o objeto por id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
};

// Pegar a posição ou index do elemento do Arrey por id
function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id);
};

app.listen (port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Rota principal
app.get("/", (req, res) => {
    res.send("Bem vindo ao servidor principal!!!!!");
});

// Rota de teste
app.get("/teste", (req, res) => {
    res.send("Rota de teste funcionando!");
});

// Buscando nomes (lista nomes)
app.get("/listanomes", (req, res) => {
    res.json(nomes);
});

// Criando Post para cadastrar
app.post("/listanomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nome cadastrado com sucesso!');
});

// Criando rota excluir
app.delete("/listanomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluída com sucesso!`);
});

// Buscando por id
app.get("/listanomes/:id", (req, res) => {
    let index = req.params.id;
    res.json(buscarNomePorId(index));
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//-----------------------------------------------------------------------

// Buscando times (lista times)

app.get("/listatimes", (req, res) => {
    res.json(times);
});

// Criando Post para cadastrar (times)
app.post("/listatimes", (req, res) => {
    times.push(req.body);
    res.status(201).send('Time cadastrado com sucesso!');
});

// Criando rota excluir (times)
app.delete("/listatimes/:id", (req, res) => {
    let index = buscarIdTime(req.params.id);
    times.splice(index, 1);
    res.send(`Time com id ${req.params.id} excluída com sucesso!`);
});

// Buscando por id (times)
app.get("/listatimes/:id", (req, res) => {
    let index = req.params.id;
    res.json(buscarTimePorId(index));
})