exports.middlewareGlobal = (req, res, next) => {
    res.locals.UmaVariavelLocal = "Este eh o valor da variavel local";
    next();
};

exports.outroMidlleware = (req, res, next) => {
    next();
};