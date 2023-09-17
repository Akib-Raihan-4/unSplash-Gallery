import React, { useState } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand';
import { Label, TextInput } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';
import Modal  from './modal';

export const Nav = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
        <Modal closeModal={toggleModal}/>
      )}
    </div>
  );
};
