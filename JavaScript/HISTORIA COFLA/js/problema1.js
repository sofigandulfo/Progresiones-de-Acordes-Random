//sistema lista alumnos

alert("hola"); 
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)), 0];
}
const tomarAsistencia = (nombre, p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}
for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}
for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    __________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    __________Ausentes: <b>${30 - alumnosTotales[alumno][1]}</b><br>
    `;

        if(30 - alumnosTotales[alumno][1] > 18){
            resultado+= "REPROBADO POR INASISTENCIAS<br><br>";
        } else {
            resultado+= "<br><br>";  
        }
        document.write(resultado);
}
