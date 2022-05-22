const Product = require("../Models/Product.js");



const getAllProducts = async(req, res) => {

    try {
        const products=await Product.find()
        res.json({products:products})
    } catch (error) {
        res.json({msg:"failed to get product"})
    }
}

const addProduct = async (req, res) => {

    try {
        const productInfo = req.body;
        const newProduct = new Product({
            brand: productInfo.brand,
            image: productInfo.image,
            description: productInfo.description,
        })
        await newProduct.save()
        res.status(201).json({msg:"added successfully", Product:newProduct})
    } catch (error) {
        res.status(400).json({msg:"failed to add new product"})
    }
}


/* const updateProduct = async (req, res) => {

    try {
        const productInfo = req.body;
        const updateproduct = await Product.findOne({_id: productInfo.id})
        if (updateproduct){
            updateproduct.brand = productInfo.brand
            updateproduct.image = productInfo.image
            updateproduct.description = productInfo.description

            await updateproduct.save()

            res.status(201).json({Product: updateproduct})
        } else {
            res.status(404).json({msg:"Product not found"})
        }

    } catch (error) {
        res.status(400).json({msg:"Failed to udpate product"})
    }
} */

const updateProduct = async (req, res) => {

    try {
        const id= req.params.id
        const product = req.body
        await Product.findByIdAndUpdate(id, product,{ new: true })
        res.status(201).json({msg: "updated successfully", Product:product})
    } catch (error) {
        res.status(400).json({msg:"failed to udpate product"})
    }
}



const deleteProduct = async (req, res) => {

    try {
        const productId = req.params['id'];
        const deleteproduct = await Product.findByIdAndRemove({_id: productId})

        res.status(201).json({msg: "deleted successfully",Product: deleteproduct})


    } catch (error) {
        res.status(400).json({msg:"failed to delete product"})
    }

}

const getOneProduct = async(req, res) => {

    try {
        const id = req.params.id;
        const product=await Product.findById(id)
        res.json({product:product})
    } catch (error) {
        res.json({msg:"failed to get product"})
    }
}


module.exports={getAllProducts,addProduct, updateProduct, deleteProduct, getOneProduct}