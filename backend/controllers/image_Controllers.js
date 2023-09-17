
const ImageSchema = require("../models/Image_Model")

exports.addImage = async (req, res) =>{
  const { name, imageUrl } = req.body;
  const image = new ImageSchema({
    name,
    imageUrl,
  });
  try { 
    
    if(!name || !imageUrl){
      return res.status(400).json({message: "All fields must be filled"})
    }
    const savedImage = await image.save();
    res.status(201).json({message: "Saved in DB"});
  } catch (error) {
    console.error('Error saving image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.getImage = async(req, res) => {
  try{
    const images = await ImageSchema.find().sort({createdAt: -1})
    res.status(200).json(images)
  } catch(error){
    res.status(500).json({message: "Server Error"})
  }
}

exports.deleteImage = async(req, res) =>{
  const {id} = req.params
  ImageSchema.findByIdAndDelete(id)
    .then((image) =>{
      res.status(200).json({message: "Image Deleted"})
    })
    .catch((error)=>{
      res.status(500).json({message:'Server Error'})
    })
}