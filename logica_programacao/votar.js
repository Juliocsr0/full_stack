const userAge = Number(prompt("Qual é a sua idade?"))

if(userAge < 16) {
    console.log("Você não pode votar")
    document.write("<strong>Você não pode votar!</strong>")
}

else if(userAge < 18 && userAge >= 16) {
    console.log("Seu voto é opcional")
    document.write("<strong>Seu voto é opcional!</strong>")
}

else {
    console.log("Você pode votar")
    document.write("<strong>Você pode votar!</strong>")
}