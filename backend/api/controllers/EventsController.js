/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create:function(req, res){
        var descripcion = req.body.descripcion;
        var tipo = req.body.tipo;
        var fecha = req.body.fecha;
        var hora = req.body.hora;
        var lugar = req.body.lugar;

        Events.create({
            descripcion: descripcion, 
            tipo:tipo,
            fecha: fecha,
            hora: hora,
            lugar: lugar
        })
            .exec(function(err){
            if(err){
                res.send(500, {error: 'Error de base de datos'});
            }
            res.send(200, {success: 'Se guardo correctamente'});
        });
    },
};

