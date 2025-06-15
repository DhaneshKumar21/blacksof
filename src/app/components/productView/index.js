import React from 'react'
import VideoGallery from './VideoGallery'

const CategoryView = () => {
    return (
        <section className='w-full min-h-screen flex flex-col justify-center items-center bg-black text-white flex-wrap'>
            <div className='text-base md:text-4xl text-white text-center !mt-10 z-[5]'>
                <p>Evolving the drive with <b> 360-degree</b></p>
                <p>comprehensive solutions</p>
            </div>
            <VideoGallery />
        </section>
    )
}

export default CategoryView