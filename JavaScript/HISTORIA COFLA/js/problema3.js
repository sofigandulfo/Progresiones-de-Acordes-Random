//celulares

class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false; 
    }


presionarBotonEncendido(){
    if (this.encendido == false){
        alert("celular prendido");
        this.encendido = true;
    } else {
        alert("celular apagado");
        this.encendido = false;
    }
}

reiniciar(){
    if (this.encendido == true){
        alert("reiniciando");
    } else {
        alert("celular apagado");
    }
}

tomarFoto(){
    alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
}

grabarVideo(){
    alert(`video grabado en: ${this.resolucionDeCamara}`);
}

mobileInfo(){
    return `
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
    Memoria Ram: <b>${this.memoriaRam}</b><br>
    `
}
}

class CelularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("estamos reconociendo tu cara");
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b>`
    }
}

celular1 = new Celular ("gold", "150g", "5'", "HD", "1GB");
celular2 = new Celular ("black", "155g", "5.5'", "FULL HD", "2GB");
celular3 = new Celular ("white", "150g", "6'", "ULTRA HD", "2GB");
document.write(` 
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`)
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar(); 


celular1 = new CelularAltaGama ("gold", "130g", "5.5'", "4K", "3GB", "FULL HD");
celular2 = new CelularAltaGama ("black", "150g", "7'", "4K", "4GB", "HD");


document.write(`
${celular1.infoAltaGama()} <br><br>
${celular2.infoAltaGama()}<br>
`);