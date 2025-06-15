import React from 'react'

const MainSection = () => {
    return (
        <section className='relative bg-gray-600 w-full h-screen flex justify-center items-center'>
            <Video />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative z-5 text-center text-white">
                <h6 className="text-xl font-semibold">Performance in motion</h6>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">Soft Trims and <span className='text-[#00bfff]'>NVH Solutions</span></h2>
                <h4 className="text-2xl mt-4">for seamless rides</h4>
            </div>
        </section>
    )
}

function Video() {
    return (
        <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
            <source src="/videos/intro-video.mp4" type="video/mp4" />
        </video>
    )
}

export default MainSection;
