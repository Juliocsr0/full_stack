const n1 = Number(prompt("Digite um número para ver sua tabuada:"));

    for (let i = 1; i <= 10; i++) {
        let resultado = n1 * i;
        console.log(`${n1} x ${i} = ${resultado}`);
    }