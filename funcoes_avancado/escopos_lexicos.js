const nome = 'Joao';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = "Henrique";
    falaNome();
}

usaFalaNome()