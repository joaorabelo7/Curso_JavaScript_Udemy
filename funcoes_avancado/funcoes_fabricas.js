// Factory function (Funcao fabrica )
function criaPessoa(nome,sobrenome,a,p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala(assunto = "esta falando sobre NADA"){
            return `${this.nome} está ${assunto}.`;
        },

        altura : a,
        peso: p,
         
        //getter  
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Joao", "Rabelo",1.73, 63);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());