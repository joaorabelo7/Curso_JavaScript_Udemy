module.exports =(req,res,next) => {
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Rabelo', 'Nao use "Rabelo"')
        console.log();
        console.log(`Vi que voce postou ${req.body.cliente}`);
        console.log();
    }

    next();
}