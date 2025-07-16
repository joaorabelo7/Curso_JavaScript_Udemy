(function(idade,peso,altura) {
    const sobrenome = 'Rabelo';
    function criaNome(nome){
        return nome + " " + sobrenome;
  }
  function falaNome(){
    console.log(criaNome("Joao"));
  }

  falaNome();
  console.log(idade,peso,altura)
}(16,65,1.73))