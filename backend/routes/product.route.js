let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();


//modelo del producto

let productSchema = require ('../models/Product');

//Crear producto

router.route('/create-product').post((req,res,next) => {
    productSchema.create(req.body, (error,data) =>{
        if (error){
            return next (error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

//Leer producto

router.route('/').get((req, res) =>{
    productSchema.find((error, data) => {
        if(error){
            return next (error)
        } else{
            res.json(data)
        }
    })
})

// obtener un solo producto
router.route('/update-product/:id').get((req, res) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// actualizar productos
router.route('/update-product/:id').put((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data)
            console.log('Product updated successfully !')
        }
    })
})

// Borrar Productos
router.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;