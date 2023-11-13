function upperOrNot(frase){
    
    let contMayus = frase.length;
    let contMinus = frase.length;
    for (let i = 0; i < frase.length; i++) {
        
        if (frase[i] === frase[i].toUpperCase() || frase[i] == " ") {
            contMayus--;
        }
        if (frase[i] === frase[i].toLowerCase() || frase[i] == " ") {
            contMinus--;
        }

    }

    if (contMayus === 0) {
        alert("Frase formada solo por mayusculas")
    }else if(contMinus === 0){
        alert("Frase formada solo por minusculas")
    }else if(contMayus > 0 && contMinus > 0){
        alert("Frase formada por minusculas y mayusculas")
    }
}

const fraseAnalizada = prompt("Escriba una frase: ");

upperOrNot(fraseAnalizada);


