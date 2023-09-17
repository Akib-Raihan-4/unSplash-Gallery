
const Image = require("../models/Image_Model")

exports.addImage = async (req, res) =>{
    try { 
        const { name, imageUrl } = req.body;
    
        const image = new Image({
          name,
          imageUrl,
        });
    
        const savedImage = await image.save();
    
        res.status(201).json(savedImage);
      } catch (error) {

        console.error('Error saving image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}