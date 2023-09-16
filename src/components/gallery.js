import React from 'react'

const Gallery = () => {
  return (
    <>
        <div className='w-[1440px] h-fit mx-auto my-[20px] sm:columns-3 gap-[30px]'>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./banana.jpg' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./corpcomment.png' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./PotatoDisease.png' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./corpcomment.png' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./DevTech.png' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./banana.jpg' className='w-[100%] rounded-[15px]'/>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <img src='./ADNDiginet.webp' className='w-[100%] rounded-[15px]'/>
            </div>
        </div>
    </>
  )
}

export default Gallery
