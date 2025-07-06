function retornaHora(data){
    if (data && !(data instanceof Date)){
        console.log("Nao eh");
        throw new TypeError("Esperando instancia de Date");
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{

    } )
}


try{
    const data = new Date('11:03:59');
    const hora = retornaHora(12);
    console.log(hora);
    
} catch(e){
    // Tratar erro
    console.log(e)
} finally{
    console.log("Tenha um bom dia")
}