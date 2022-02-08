const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const cantante = require('../document/autores.json');

/*GET*/
router.get('/', (req, res) => {
    res.json(cantante);
});

/*POST*/
router.post('/', (req, res) => {
    const { nombre, cantante } = req.body;
    if(nombre && cantante) {
        const id = cantante.lenth + 1;
        const cantanteNuevo = {...req.body, id};
        autor.push(cantanteNuevo);
        res.json(cantante);
    } else{
        res.send('esta pagina no funciona')
    }
});

/*PUT*/
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {nomnbre, cantante} = req.body;
    if ( nombre && cantante) {
        _.each(autor, (data, i)=> {
            if(data.id == id) {
                data.nombre = nombre;
                data.cantante = cantante;
            }
        });
        res.json(cantante)
    } else{
        res.send('esta pagina no funciona')
    }
})

/*DELETE*/
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(cantante, (data, i) => {
        if(data.id == id){
            cantante.splice(i, 1);
        }
    });
    res.send(cantante)
})
module.exports = router;