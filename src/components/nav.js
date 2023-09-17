import React, { useState } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand';
import { Label, TextInput } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

export const Nav = () => {
  
  const [label, setLabel] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const handleSaveClick = () => {
    
    console.log('Label:', label);
    console.log('Photo URL:', photoUrl);

    
    setModalVisible(false);
  };


  const handleCancelClick = () => {
 
    setModalVisible(false);
  };

  return (
    <div className='w-[1440px] h-fit mx-auto mt-3'>
      <Navbar fluid rounded>
        <NavbarBrand>
          <img src='./my_unsplash_logo.svg' className='cursor-pointer mr-5' />
          <TextInput
            icon={BiSearch}
            id="email4"
            placeholder="Search by name"
            type="text"
            className='w-[300px]'
          />
        </NavbarBrand>
        {/* Trigger button to open the modal */}
        <Button
          data-modal-target='image-modal'
          className="bg-[#3db46d] text-white [font-family:'Noto_Sans-Bold',Helvetica] font-bold hover:opacity-100 opacity-90"
          color='#3db46d'
          onClick={() => setModalVisible(true)}
        >
          Add a photo
        </Button>
      </Navbar>

      {/* Modal */}
      {modalVisible && (
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
      )}
    </div>
  );
};
