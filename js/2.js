const ciudades = [];
do {
    const ciudad = prompt("Ingrese una ciudad:");
    if (ciudad === "") {
        alert("Ingrese una respuesta valida")
    }else{
        ciudades.push(ciudad);
    }

} while (confirm("¿Desea continuar?") !== false);

document.write(`Longitud del arreglo: ${ciudades.length} <br>`);
document.write(`Posiciones de items: 1er: ${ciudades[0]}, 2do: ${ciudades[1]}, 3ro: ${ciudades[2]} y ultimo: ${ciudades[ciudades.length - 1]}<br>`)
ciudades.push("Paris");
document.write(`2da posicion ${ciudades[1]}<br>`);
ciudades.splice(1,1,"Barcelona");
document.write(`Arreglo final ${ciudades}`);
