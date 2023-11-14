const resultados = [];
let dos = 0;
let tres = 0;
let cuatro = 0;
let cinco = 0;
let seis = 0;
let siete = 0;
let ocho = 0;
let nueve = 0;
let diez = 0;
let once = 0;
let doce = 0;
const apariciones = [
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
  once,
  doce,
];
for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  const sumaDados = dado1 + dado2;
  resultados[i] = sumaDados;

}
for (let i = 0; i < resultados.length; i++) {
  switch (resultados[i]) {
    case 2:
      apariciones[0]++;
      break;
    case 3:
      apariciones[1]++;
      break;
    case 4:
      apariciones[2]++;
      break;
    case 5:
      apariciones[3]++;
      break;
    case 6:
      apariciones[4]++;
      break;
    case 7:
      apariciones[5]++;
      break;
    case 8:
      apariciones[6]++;
      break;
    case 9:
      apariciones[7]++;
      break;
    case 10:
      apariciones[8]++;
      break;
    case 11:
      apariciones[9]++;
      break;
    case 12:
      apariciones[10]++;
      break;
    default:
      break;
  }
}
document.write("<table><td>Suma🎲🎲</td><td>Apariciones</td>");
for (let i = 0; i < apariciones.length; i++) {
  document.write(`<tr><td>${i + 2}</td>`);
  document.write(`<td>${apariciones[i]}</td></tr>`);
}

document.write("<table>");
