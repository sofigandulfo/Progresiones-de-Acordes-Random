const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["jorge", "luis","sofia", "belen", "cofla"],
        programacion: ["lucas", "luis", "pedro", "matias", "sofia",],
        logica: ["fernando", "luis", "pedro", "matias", "sofia", "belen"],
        quimica: ["roberto", "luis", "pedro", "matias", "sofia", "belen"]
    }
    if (materias[materia] != undefined){
        return [materias[materia], materia];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = obtenerInformacion(materia)[0][0];
        let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>
        Los alumnos son: <b>${alumnos}</b><br><br>
        `);
    }
}


const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes= [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b>${alumno}</b> esta en: <b>${cantidadTotal} clases:${clasesPresentes};</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("logica");
mostrarInformacion("programacion");

document.write(cantidadDeClases("sofia"));
document.write(cantidadDeClases("matias"));
document.write(cantidadDeClases("pedro"));
