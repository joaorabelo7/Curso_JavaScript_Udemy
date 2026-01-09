exports.middlewareGlobal = (req, res, next) => {
    res.locals.UmaVariavelLocal = "Este eh o valor da variavel local";
    next();
};

exports.outroMidlleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res,  next) => {
    if(err){
        return res.render('404');
    }
    next();
};

exports.csrfMidlleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
};