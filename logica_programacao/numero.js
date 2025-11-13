const number = Number(prompt("Digite um número"))

if(number < 0) {
    console.log("seu número é negativo")
    document.write("<strong>Seu número é negativo!</strong>")
}

else if(number > -1 && number < 1) {
    console.log("Seu número é neutro")
    document.write("<strong>Seu número é neutro, ou seja, igual a zero!</strong>")
}

else {
    console.log("número positivo")
    document.write("<strong>Seu número é positivo!</strong>")
}