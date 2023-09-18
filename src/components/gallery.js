import React, { useState, useEffect } from 'react';
import "./galleryImage.css";
import axios from 'axios';

const Gallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [enteredName, setEnteredName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get('https://unsplashapi-production.up.railway.app/api/get-image');
        console.log(res);
        setImages(res.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  });

  const handleDeleteImage = async (imageId, imageName) => {
    setImageToDelete({ id: imageId, name: imageName });
    setDeleteConfirmationVisible(true);
  };

  const confirmDelete = async() => {
    if (enteredName === imageToDelete.name) {
      try {
        await axios.delete(`https://unsplashapi-production.up.railway.app/api/delete-image/${imageToDelete.id}`);
        // Optionally, you can also update the images state to reflect the deleted image
        setImages((prevImages) => prevImages.filter((image) => image._id !== imageToDelete.id));
        setDeleteConfirmationVisible(false);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    } else {
        setErrorMessage('Entered name is incorrect. Please try again.')
        setTimeout(() => {
            setErrorMessage('');
        }, 2000);
    }
  };

  const cancelDelete = () => {
    setImageToDelete(null);
    setEnteredName('');
    setErrorMessage('');
    setDeleteConfirmationVisible(false);
  };

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  
  return (
    <>
      <div className='sm:w-[1440px] w-[90%] h-fit mx-auto my-[80px] sm:columns-3 gap-[25px]'>
        {filteredImages.map((image) => (
          <div className='w-[100%] mb-[25px] break-inside-avoid' key={image._id}>
            <div className="container">
              <img className='' src={image.imageUrl} alt={image.name} />
              <div className='overlay'></div>
              <div className='product-info'>{image.name}</div>
              <button className='buttonLay' onClick={() => handleDeleteImage(image._id, image.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {deleteConfirmationVisible && (
        <div
        id="image-modal"
        className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50"
        >
            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                <div className="modal-container bg-white sm:w-[600px] w-[90%] mx-auto rounded-[12px] shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#333333] text-[24px]">Are you sure ?</p>
                        </div>
                        <div className="my-5">
                            <label className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#4f4f4f] text-[18px]" htmlFor="label">
                                <p className='pb-2'>If you want to delete the image enter the name:</p>
                            </label>
                            <input
                                type="text"
                                id="label"
                                placeholder='A sunlight'
                                className="w-full rounded-[12px] border border-solid border-[#4f4f4f] shadow-[0px_1px_6px_#0000001a]"
                                onChange={(e) => setEnteredName(e.target.value)}
                            />
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        </div>
                        <div className="flex justify-end pt-2 space-x-4">
                            {/* Cancel button */}
                            <button
                                id="cancelButton"
                                className="px-4 p-3 rounded-lg text-[hsl(0,0%,74%)] hover:text-[hsl(0,0%,54%)]"
                                onClick={cancelDelete}
                                >
                                No
                            </button>
                            {/* Confirm delete button */}
                            <button
                            id="delete-button"
                            className="px-[20px] bg-[#3db46d] opacity-90 p-3 rounded-[10px] text-white hover:opacity-100"
                            onClick={confirmDelete}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      )}
    </>
  );
};

export default Gallery;
