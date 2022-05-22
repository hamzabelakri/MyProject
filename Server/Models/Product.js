const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:"https://www.bmw-tunisia.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-model-carousel-10.jpg"
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("product", productSchema);