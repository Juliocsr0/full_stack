/*
    Vamos criar um programa, que o usuário executa uma função
    e dentro dessa função existe uma frase.
    Pode pular linhas.
*/
function mostrarFrase(frase) {
    document.write(frase);
}

function pularLinha() {
    document.write("<br>");
}
    mostrarFrase("Olá, estou aprendendo funções!");
    pularLinha();
    mostrarFrase("Funções são blocos de código que executam tarefas específicas.");
    pularLinha();
    mostrarFrase("Estou gostando de programar em JavaScript!");