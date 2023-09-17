import React from 'react'
import "./galleryImage.css"

const Gallery = () => {
  return (
    <>
        <div className='w-[1440px] h-fit mx-auto my-[20px] sm:columns-3 gap-[30px]'>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <div class="container">
                    <img className='' src="https://picsum.photos/500?random=1"/>
                    <div className='overlay'></div>
                    <div className='product-info'>Title of the pic</div>
                    <button className='buttonLay'>Delete</button>
                </div>
                    
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <div class="container">
                    <img className='' src="https://picsum.photos/500?random=2"/>
                    <div className='overlay'></div>
                </div>
            </div>
            <div className='w-[100%] mb-[30px] break-inside-avoid'>
                <div class="container">
                    <img className='' src="https://picsum.photos/500?random=7"/>
                    <div className='overlay'></div>
                    
                </div>
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
