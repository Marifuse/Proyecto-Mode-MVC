var User = require('../models/users');
exports.user_create = function (req, res, next) {
    console.log("entrar al controlador");
    if (req.body) {
        console.log("Datos ingresados correctamente");
        let items = req.body;
        User.create(items, function (err, newUsers) {
            console.log("Se está creando el usuario");
            if (err) return res.json({ error: err });
            console.log("listo");
            res.json(newUsers)
        });
    } else {
        res.json({
            status: 'ERROR', message: 'Todos los Campos son OBLIGATORIOS'}); //mandar mensaje de error
    }
}