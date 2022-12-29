class Escalas {
    constructor (i, iim, iiim, iv, v, vim, vii){
        this.i = i;
        this.iim = iim;
        this.iiim = iiim;
        this.iv = iv;
        this.v = v;
        this.vim = vim;
        this.vii = vii;
    }
    progresion1(){
    return(`
    I: ${this.i}<br>
    IV: ${this.iv}<br>
    V: ${this.v}
    `);}

    progresion2(){
        return(`
        ii: ${this.iim}<br>
        V: ${this.v}<br>
        I: ${this.i}
        `);}
        
    progresion3(){
        return(`
        I: ${this.i}<br>
        V: ${this.v}<br>
        vi: ${this.vim}<br>
        iv: ${this.iv}<br><br>
        `);}
    progresion4(){
        return(`
        I: ${this.i}<br>
        vi: ${this.vim}<br>
        iv: ${this.iv}<br>
        v: ${this.v}<br><br>
        `);} 
    progresion5(){
        return(`
        vi: ${this.vim}<br>
        iv: ${this.iv}<br>
        i: ${this.i}<br>
        v: ${this.v}<br><br>
        `);}
    progresion6(){
        return(`
        I: ${this.i}<br>
        v7/vi: ${this.v}7 / ${this.vim}<br>
        vi: ${this.vim}<br>
        ii: ${this.iim}<br>
        v7: ${this.v}7 <br><br>
        `);}
    progresion7(){
        return(`
        I: ${this.i}<br>
        iii: ${this.iiim}<br>
        vi: ${this.vim}<br>
        iv: ${this.iv}<br><br>
        `);}
    progresion8(){
        return(`
        I: ${this.i}<br>
        V7/iii: ${this.v}7 / ${this.iiim}<br>
        iii: ${this.iiim}<br>
        vi: ${this.vim}<br>
        iv: ${this.iv}<br><br>
        `);}

    }



c = new Escalas ("C", "Dm", "Em", "F", "G", "Am", "B°");
db = new Escalas ("Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "C°");
d = new Escalas ("D", "Em", "F#m", "G", "A", "Bm", "C#");
eb = new Escalas ("Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "D°");
e = new Escalas ("E", "F#m", "G#m", "A", "B", "C#m", "D#");
f = new Escalas ("F", "Gm", "Am", "Bb", "C", "Dm", "E°");
gb = new Escalas ("Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "F°");
g = new Escalas ("G", "Am", "Bm", "C", "D", "Em", "F#°");
ab = new Escalas ("Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "G°");
a = new Escalas ("A", "Bm", "C#m", "D", "E", "F#m", "G#°");
bb = new Escalas ("Bb", "Cm", "Dm", "Eb", "F", "Gm", "A°");
b = new Escalas ("B", "C#m", "D#m", "E", "F#", "G#m", "A#°");

let escalas = [c, db, d, eb, e, f, gb, g, ab, a, bb, b];

let random = escalas[Math.floor(Math.random() * escalas.length)];

let progresiones = [`${random.progresion1()}`, `${random.progresion2()}`, `${random.progresion3()}`, `${random.progresion4()}`, `${random.progresion5()}`, `${random.progresion6()}`, `${random.progresion7()}`, `${random.progresion8()}`];

let progRandom = progresiones[Math.floor(Math.random() * progresiones.length)];


//console.log(progresiones);

document.write(progRandom);

//document.write(`${c.progresion1()}`)

























































/*
const escalaC = {
    I: "C <br>", 
    iim:"Dm <br>",
    iiim: "Em <br>", 
    IV:"F <br>", 
    V:"G <br>",
    vim: "Am <br>",
    vii: "B° <br><br>"
};

const escalaD = {
    I:"D <br>", 
    iim:"Em <br>",
    iiim:"F#m <br>",
    IV:"G <br>", 
    V:"A <br>", 
    vim:"Bm <br>", 
    vii:"C# <br><br>"
}

const escalaE = {
    I:"E <br>",
    iim:"F#m <br>",
    iiim:"G#m <br>", 
    IV:"A <br>",
    V:"B <br>", 
    vim:"C#m <br>",
    vii:"D# <br><br>"
}


function progresion1() {
    return(`I: ${this.I}<br>
    IV: ${this.IV}<br>
    V: ${this.V}
    `);}

function progresion2() {
    return(`ii: ${this.iim}<br>
    V: ${this.V}<br>
    I: ${this.I}
    `);}

function progresion3() {
return(`I ${this.I}<br>
V: ${this.V}<br>
vi: ${this.vi}<br>
    `);}

let escalas = [escalaC, escalaD, escalaE];


*/




//let random = escalas[Math.floor(Math.random() * escalas.length)];

//console.log(random);

//let progresiones = [progresion1, progresion2, progresion3];

//let progRandom = progresiones[Math.floor(Math.random() * progresiones.length)];

//let contenido = document.getElementById("contenido");
//contenido.innerHTML = JSON.stringify(random);
