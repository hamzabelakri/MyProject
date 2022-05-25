const express=require('express');
const router=express.Router();
const isAuth=require('../Midelware/Auth')
const {getAllProducts,addProduct, updateProduct, deleteProduct, getOneProduct,findCar}=require('../Controllers/productController')

router.get('/', getAllProducts);
router.post('/',isAuth, addProduct);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);
router.get('/:id',getOneProduct);
router.post('/find',findCar)


module.exports = router;
