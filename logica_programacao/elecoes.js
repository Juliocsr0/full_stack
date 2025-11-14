/*Algoritmo: Anos de Eleições

Início
    Declare anoInicio, anoAtual como números
    anoAtual ← 2025

    Escreva("Digite o ano da primeira eleição que você acompanhou:")
    Leia anoInicio

    Enquanto anoInicio ≤ anoAtual faça
        Escreva("Ano de eleição: ", anoInicio)
        anoInicio ← anoInicio + 2
    FimEnquanto
Fim*/

const anoInicio = 1894
const anoAtual = new Date().getFullYear();

let anoEleicao = anoInicio; 
while (anoEleicao <= anoAtual) {
  console.log("Eleições:", anoEleicao);
  anoEleicao = anoEleicao + 2;
}