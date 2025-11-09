class ControleRemoto { 
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    
    // Metodo de instancia
    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo estatico
    static soma(x,y){
        return x + y;
    }
}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

console.log(c1);
console.log(ControleRemoto.soma(2,3));