/*Algoritmo: Anos de Copa do Mundo

Início
    Declare anoInicio, anoAtual como números
    anoAtual ← 2025

    Escreva("Digite o ano da primeira Copa do Mundo que você viu:")
    Leia anoInicio

    Enquanto anoInicio ≤ anoAtual faça
        Escreva("Copa do Mundo: ", anoInicio)
        anoInicio ← anoInicio + 4
    FimEnquanto
Fim*/

const anoInicio = 1930;
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

let anoCopa = anoInicio; 
while (anoCopa <= anoAtual) {
  console.log("Copa do Mundo:", anoCopa);
  anoCopa = anoCopa + 4;
}
