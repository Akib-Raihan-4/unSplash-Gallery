import React, {useState, useEffect} from 'react'
import "./galleryImage.css"
import axios from 'axios'

const Gallery = () => {

    const [images, setImages] = useState([])
    useEffect(()=> {
        async function fetchImages(){
            try{
                const res = await axios.get('http://localhost:4000/api/get-image');
                console.log(res)
                setImages(res.data);
            }catch(error){
                console.error('Error fetching images:', error)
            }
        }
        fetchImages()
    })
  return (
    <>
        <div className='w-[1440px] h-fit mx-auto my-[20px] sm:columns-3 gap-[30px]'>
            {images.map((image) => (
            <div className='w-[100%] mb-[30px] break-inside-avoid' key={image._id}>
                <div className="container">
                <img className='' src={image.imageUrl} alt={image.name} />
                <div className='overlay'></div>
                <div className='product-info'>{image.name}</div>
                <button className='buttonLay'>Delete</button>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Gallery
