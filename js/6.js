const lado1 = parseInt(prompt("Ingrese el valor de un lado del rectangulo: "))
const lado2 = parseInt(prompt("Ingrese el valor de otro lado del rectangulo: "))

const perimetroRectangulo = (valor1,valor2) =>  2*(valor1 + valor2);

document.write(`Perimetro del rectangulo: ${perimetroRectangulo(lado1,lado2)}`);