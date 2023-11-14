function itsPairOrNot(numero){
    if (numero%2 === 0) {
        document.write(`El numero ${numero} es par.`)
    }else{
        document.write(`El numero ${numero} NO es par.`)
    }
}

const numeroAnalizado = prompt("Ingrese un entero:");

itsPairOrNot(numeroAnalizado);