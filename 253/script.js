class Animal {
    constructor() {
        this.cor = '';
        this.tamanho = '';
    }
}

class Cachorro {
    constructor() {
        this.orelhas = 'Grandes e caídas';
    }
    correr() {
        console.log("Correu");
    }
    dormir() {
        console.log("Dormiu");
    }
    rosnar() {
        console.log("Rosnou");
    }
}

class Passaro {
    constructor() {
        this.bico = "Curto";
    }
    voar() {
        console.log("Voou");
    }
    dormir() {
        console.log("Dormiu");
    }
}
let cachorro = new Cachorro();
let passaro = new Passaro();

console.log(cachorro);
console.log(passaro);