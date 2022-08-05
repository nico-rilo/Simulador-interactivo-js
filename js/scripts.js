const edad = prompt("Selecciona tu edad por favor");

    if(Number(edad) == edad){
        if(edad > 18){
            alert("Sos mayor de edad");
            console.log("Ingreso al Boliche");
        }
        else{
            document.write("Todavia no sos mayor de edad");
            console.log("No ingreso al Boliche");
        }
    }
    else{
        alert("Digita un valor numerico valido");
        console.log("No inserta valor numerico valido");
    }
