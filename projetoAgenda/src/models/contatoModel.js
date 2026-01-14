const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, default: ''},
    telefone: {type: String,default: ''},
    criadoEm: {type: Date, required: false, default: Date.now},
});

const contatoModel = mongoose.model('contato', contatoSchema);

function Contato(body){
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    this.valida();

    if(this.errors.length > 0 ) return;
    this.contato = await contatoModel.create(this.body)

};

Contato.prototype.valida = function() {
        this.cleanUp();

        // Email precisa ser valido
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');
        if(!this.body.nome.trim()) this.errors.push('Nome eh um campo obrigatorio');
        if(!this.body.email && !this.body.telefone) {
            this.errors.push('Pelo menos um contato precisa ser enviado: email ou telefone');
        }
        

    }

    Contato.prototype.cleanUp = function(){
        for(const key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }


module.exports = Contato;