//sistema apps

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
   
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desintalada correctamente")
        }
    } abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}


app1 = new App("16.000", "3 estrellas", "900MB");
app2 = new App ("1.000.000", "5 estrellas", "1GB");
app3 = new App ("1.000", "1.5 estrellas", "300MB");
app4 = new App ("1.500.000", "4.5 estrellas", "900MB");
app5 = new App ("48", "1 estrella", "400MB");
app6 = new App ("5.000.000", "5 estrellas", "3GB");
app7 = new App ("7.200", "3 estrellas", "760MB");

document.write(`
    ${app1.appInfo()}<br><br>
    ${app2.appInfo()}<br><br>
    ${app3.appInfo()}<br><br>
    ${app4.appInfo()}<br><br>
    ${app5.appInfo()}<br><br>
    ${app6.appInfo()}<br><br>
    ${app7.appInfo()}<br><br>
    `);


app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();