import React,{useState} from 'react'
import axios from 'axios';

const Modal = ({closeModal}) => {
    const [label, setLabel] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const handleSaveClick = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/add-image', {
            name: label, 
            imageUrl: photoUrl,
            });
        
            console.log('Image added:', response.data);
            closeModal();
        } catch (error) {
            console.error('Error adding image:', error);
        }
    };
      
    
    
    const handleCancelClick = () => {
    closeModal()
    };
      
  return (
    <div
        id="image-modal"
        className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50"
    >
        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

        <div className="modal-container bg-white w-[600px] mx-auto rounded-[12px] shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
            <p className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#333333] text-[24px]">Add a new photo</p>
            </div>

            <div className="my-5">
            <label className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#4f4f4f] text-[18px]" htmlFor="label">
            <p className='pb-2'>Label:</p>
            </label>
            <input
                type="text"
                id="label"
                placeholder='A sunlight'
                className="w-full rounded-[12px] border border-solid border-[#4f4f4f] shadow-[0px_1px_6px_#0000001a]"
                onChange={(e) => setLabel(e.target.value)}
            />
            </div>
            <div className="my-5">
            <label className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#4f4f4f] text-[18px] " htmlFor="PhotoUrl">
                <p className='pb-2'>Photo URL:</p>
                
            </label>
            <input
                type="text"
                id="PhotoUrl"
                placeholder='https://picsum.photos/500?random=7'
                className="w-full rounded-[12px] border border-solid border-[#4f4f4f] shadow-[0px_1px_6px_#0000001a]"
                onChange={(e) => setPhotoUrl(e.target.value)}
                
            />
            </div>

            <div className="flex justify-end pt-2 space-x-4">
            {/* Cancel button */}
            <button
                id="cancel-button"
                className="px-4 p-3 rounded-lg text-[hsl(0,0%,74%)] hover:text-[hsl(0,0%,54%)]"
                onClick={handleCancelClick}
            >
                Cancel
            </button>
            
            {/* Save button */}
            <button
                id="save-button"
                className="px-[20px] bg-[#3db46d] opacity-90 p-3 rounded-[10px] text-white hover:opacity-100"
                onClick={handleSaveClick}
            >
                Submit
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal