import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { IoSearch } from "react-icons/io5";

const HeroSearch = () => {
    return (
        <>
            <div className='flex items-center border-b-[2px] w-full md:w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex items-center justify-between text-[#82828A] w-full'>
                    <div className='flex flex-col'>
                        <h2 className='text-[10px]'>Location</h2>
                        <h2 className='text-black text-[12px] font-semibold'>Location</h2>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='flex items-center border-b-[2px] w-full md:w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex items-center justify-between text-[#82828A] w-full'>
                    <div className='flex flex-col'>
                        <h2 className='text-[10px]'>Type</h2>
                        <h2 className='text-black text-[12px] font-semibold'>Booking Type</h2>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='flex items-center border-b-[2px] w-full md:w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex flex-col'>
                    <h2 className='text-[10px]'>Date From</h2>
                    <h2 className='text-black text-[12px] font-semibold'>Date From</h2>
                </div>
            </div>

            <div className='flex items-center border-b-[2px] w-full md:w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex flex-col'>
                    <h2 className='text-[10px]'>Guest</h2>
                    <h2 className='text-black text-[12px] font-semibold'>0</h2>
                </div>
            </div>

            <div className="bg-brand text-white rounded-md gap-[10px] flex items-center justify-center px-2 cursor-pointer">
                <IoSearch />
                <button className="">Search</button>
            </div>

        </>
    )
}

export default HeroSearch