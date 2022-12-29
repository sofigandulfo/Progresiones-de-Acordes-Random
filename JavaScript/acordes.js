class Escalas {
    constructor (I, iim, iiim, IV, V, vim, vii){
        this.I = I;
        this.iim = iim;
        this.iiim = iiim;
        this.IV = IV;
        this.V = V;
        this.vim = vim;
        this.vii = vii;
    }
    progresion1(){
    return(`I: ${this.I}<br>
    IV: ${this.IV}<br>
    V: ${this.V}
    `);}

    progresion2(){
        return(`ii: ${this.iim}<br>
        V: ${this.V}<br>
        I: ${this.I}
        `);}
        
    progresion3(){
        return(`I ${this.I}<br>
        V: ${this.V}<br>
        vi: ${this.vi}<br>
        
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

let progesiones = [`${Escalas.progresion1()}, ${Escalas.progresion2()}, ${Escalas.progresion3()}`];

let random = Escalas[Math.floor(Math.random() * Escalas.length)];

document.write(random)



let Escalas = ["C","Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" ];
/*
for (escala in Escalas){
    let random = Escalas[Math.floor(Math.random() * Escalas.length)];
    document.write(random);    
}
*/

/*for (escala in Escalas ){
    let escalaC = Escalas[0];
    let escalaDb = Escalas[1];
    let escalaD = Escalas[2];
    let escalaEb = Escalas[3];
    let escalaE = Escalas[4];
    let escalaF = Escalas[5];
    let escalaGb = Escalas[6];
    let escalaG = Escalas[7];
    let escalaAb = Escalas[8];
    let escalaA = Escalas[9];
    let escalaBb = Escalas[10];
    let escalaB = Escalas[11];
}
*/


/*const obtenerEscala = (escala)=> {
    escalas = {
        c: ["C", "Dm", "Em", "F", "G", "Am", "B°"],
db: ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "C°"],
d: ["D", "Em", "F#m", "G", "A", "Bm", "C#"],
eb: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "D°"],
e: ["E", "F#m", "G#m", "A", "B", "C#m", "D#"],
f: ["F", "Gm", "Am", "Bb", "C", "Dm", "E°"],
gb: ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "F°"],
g: ["G", "Am", "Bm", "C", "D", "Em", "F#°"],
ab: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "G°"],
a: ["A", "Bm", "C#m", "D", "E", "F#m", "G#°"],
bb: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "A°"],
b: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#°"]
    }

}


document.write(obtenerEscala)*/