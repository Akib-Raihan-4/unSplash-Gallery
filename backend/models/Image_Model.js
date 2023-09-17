const mongoose = require('mongoose');

// Define the image schema
const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },{timestamps:true},
  {
    collection: 'custom_collection_name', // Specify the collection name here
  }
);

// Create the Image model
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
