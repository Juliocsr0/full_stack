/* 
    Declare número como número

    Função MostrarDobro(valor)
        Escreva("O dobro de ", valor, " é ", valor * 2)
    FimFunção

    Escreva ("Digite um número:")
    Leia número

    Chame MostrarDobro(numero)
Fim
*/

let numero = Number(prompt("Digite um número:"));
function MostrarDobro(numero) {
    document.write("O dobro de ", numero, " é ", numero * 2);
}
MostrarDobro(numero);