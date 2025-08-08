try{
    // Eh executada qnd n ha erros
    console.log("Abri um arquivo");
    console.log("Manipulei o arquivo e gerou erro");
    console.log("Fecehi o arquivo");

    try{
        console.log(e);
    }  catch (e){
        console.log("Deu erro");
    } finally{
        console.log("tambem sou finally")
    }
} catch (e){
    // Executada qnd ha erros
    console.log("Tratando o erro");
} finally{
    //Sempre 
    console.log("Sempre sou executado")
}