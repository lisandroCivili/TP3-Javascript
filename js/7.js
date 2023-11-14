const numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar: "));

const mostrarTablaMult = (tablaNumero) => {
    document.write(`<table><tr><th>Tabla del ${tablaNumero}</th><th>Resultados</th></tr>`)
    for (let i = 1; i <= 10; i++) {

        document.write(`<tr><td>${tablaNumero}x${i}</td><td>${tablaNumero*i}</td></tr>`)
    }
    document.write(`</table>`)
    }

mostrarTablaMult(numero);