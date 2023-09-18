// Nav.js

import React, { useState } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand';
import { TextInput } from 'flowbite-react';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi'; // Import the menu and close icons
import Modal from './modal';
import Gallery from './gallery';


export const Nav = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='sm:w-[1440px] h-fit mx-auto mt-3 relative'>
      {/* Mobile Navbar */}
      <div className={`block sm:hidden fixed top-0 z-10 w-screen`}>
        <Navbar fluid className={`bg-opacity-70 px-4 `}>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <button
                className='text-3xl text-gray-700'
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <BiX />
                ) : (
                  <BiMenu />
                )}
              </button>
              {mobileMenuOpen && (
                <TextInput
                  icon={BiSearch}
                  id="search-input"
                  placeholder="Search by name"
                  type="text"
                  className={`w-[200px] ml-2`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
            </div>
            {mobileMenuOpen && (
              <Button
                data-modal-target='image-modal'
                className="bg-[#3db46d] text-white font-bold hover:opacity-100 opacity-90"
                color='#3db46d'
                onClick={() => {
                  setModalVisible(true);
                  toggleMobileMenu(); // Close the mobile menu when Add button is clicked
                }}
              >
                Add
              </Button>
            )}
          </div>
        </Navbar>
      </div>

      {/* Desktop Navbar */}
      <div className='hidden sm:block fixed top-0 z-10 w-[1440px]'>
        <Navbar fluid className='bg-opacity-70 sm:px-0'>
          <NavbarBrand>
            <img src='./my_unsplash_logo.svg' className='cursor-pointer mr-5' />
            <TextInput
              icon={BiSearch}
              id="search-input"
              placeholder="Search by name"
              type="text"
              className='w-[300px]'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
      </div>

      {/* Modal */}
      {modalVisible && (
        <Modal closeModal={toggleModal} />
      )}

      {/* Render the Gallery component and pass searchQuery as a prop */}
      <Gallery searchQuery={searchQuery} />
    </div>
  );
};
