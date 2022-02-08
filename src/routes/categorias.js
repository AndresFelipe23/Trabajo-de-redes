const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const categoria = require('../document/categorias.json');

/*GET*/
router.get('/', (req, res) => {
    res.json(categoria);
});

/*POST*/
router.post('/', (req, res) => {
    const {categoria, Album} = req.body;
    if( categoria && Album) {
        const id = categoria.length + 1;
        const categoriaNuevo = {...req.body, id };
        categoria.push(categoriaNuevo);
        res.json(categoria);
    } else {
        res.send('esta pagina no funciona')
    }
});

/*PUT*/
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { categoria, Album } = req.body;
    if (categoria && Album) {
        _.each(categoria, (data, i) => {
            if(data.id == id) {
                data.categoria = categoria;
                data.Album = Album;
            }

        });
        res.json(categoria)
    } else{
        res.send('esta pagina no funciona')
    }

})

/*DELETE*/
router.delete('/:d', (req, res) => {
    const { id } = req.params;
    _.each(categoria, (data, i) => {
        if(data.id == id){
            categoria.splice(i, 1);
        }

    });
    res.send(categoria)
})
module.exports = router;