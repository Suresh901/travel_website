import React from 'react';
import HeroSearch from './HeroSearch';

const HeroSection = () => {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center gap-2"
            style={{ backgroundImage: "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/slider-1.jpg')" }}>
            <div className='text-white flex flex-col items-center justify-center pb-5'>
                <h1 className="text-[22px] lg:text-[58px] font-bold relative">Where Would You Like To Go?
                    <span className='bg-[#F7921E] absolute text-[10px] top-[-8px] left-[-15px] lg:top-0 lg:left-0 -rotate-[15deg] p-1'>Let's Explore</span>
                </h1>
                <h1 className='text-[10px] lg:text-[22px]'>Checkout Beautiful Places Around the World.</h1>
            </div>

            <div
                className='bg-white w-[80vw] p-5 rounded-md flex flex-col md:flex-row justify-between mb-8'>
                <HeroSearch />
            </div>
            <div className='text-white'>
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/line-arrow.png" alt="" />
                <h1 className='ml-20 pt-1'>Or browse the selected type</h1>
            </div>
        </div>
    );
};

export default HeroSection;