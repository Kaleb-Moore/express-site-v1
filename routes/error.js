function fourOneFourHandler(req, res, next) {
    const err = new Error();
    err.status = 404;
    next(err);
};

function globalHandler(err, req, res, next) {
    if(err.status === 404) {
        res.status(404);
        res.render('page-not-found', { err });
        console.log('Page not found', err);
    } else {
        err.message = err.message || "Something went wrong!";
        res.status(err.status || 500);
        res.render('error', { err })
    }
};

module.exports = { fourOneFourHandler, globalHandler};