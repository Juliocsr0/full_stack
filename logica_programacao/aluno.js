const nota = Number(prompt("Digite sua nota"))

if(nota >= 6) {
    console.log("aprovado")
    document.write("<strong>Você foi aprovado!</strong>")
}

else if(nota > 4 && nota < 5.9) {
    console.log("recuperação")
    document.write("<strong>Você ficou de recuperação!</strong>")
}

 else if(nota > 10) {
    console.log("Impossível")
    document.write("<strong>Você digitou o número errado!</strong>")
 }

 else if(nota < 0) {
    console.log("Impossível")
    document.write("<strong>Você digitou o número errado!</strong>")
 }

else {
    console.log("reprovado")
    document.write("<strong>Você foi reprovado!</strong>")
}