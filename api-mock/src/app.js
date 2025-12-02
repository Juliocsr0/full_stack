import express from "express";
const app = express();
app.use(express.json());

export default app;

// mock
const cadastros = [
    {
    id: 1,
    nome: "Fernanda Silva",
    telefone: "11987654321",
    cpf: "123.456.789-00",
    email: "fernanda@gmail.com",
    idade: 28,
    endereco: "Rua das Flores, 123"
    },
    {
      id: 2,
      nome: "Caio Oliveira",
      telefone: "11922223333",
      cpf: "987.654.321-11",
      email: "caio@gmail.com",
      idade: 32,
      endereco: "Avenida Brasil, 450"
    },
    {
      id: 3,
      nome: "Pedro Almeida",
      telefone: "21999998888",
      cpf: "321.654.987-55",
      email: "pedro@hotmail.com",
      idade: 45,
      endereco: "Rua Central, 999"
    }
];

// ----------------------------------------------------

// Criando funções auxiliares para nomes

// Retornar o objeto por id
function buscarCadastroPorId(id) {
    return cadastros.filter((nome) => nome.id == id)
};

// Pegar a posição ou index do elemento do Arrey por id
function buscarIdCadastro(id) {
    return cadastros.findIndex((nome) => nome.id == id);
};

// -------------------------------------------------------

// Rota principal
app.get("/", (req, res) => {
    res.send("Bem vindo ao servidor principal!")
});

// Buscando nomes (lista cadastro)
app.get("/listacadastros", (req, res) => {
    res.json(cadastros);
});

// Criando Post para cadastrar
app.post("/listacadastros", (req, res) => {
    cadastros.push(req.body);
    res.status(201).send('Cadastro cadastrado com sucesso!');
});

// Criando rota excluir
app.delete("/listacadastros/:id", (req, res) => {
    let index = buscarIdCadastro(req.params.id);
    cadastros.splice(index, 1);
    res.send(`Cadastro com id ${req.params.id} excluída com sucesso!`);
});

// Buscando por id
app.get("/listacadastros/:id", (req, res) => {
    let index = req.params.id;
    res.json(buscarCadastroPorId(index));
})

// Criando rota para alteração (cadastro)

app.put("/listacadastros/:id", (req, res) => {
    let index = buscarIdCadastro(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].email = req.body.email;   
    cadastros[index].idade = req.body.idade;  

    res.json(cadastros)
});

