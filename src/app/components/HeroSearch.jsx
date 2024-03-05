import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { IoSearch } from "react-icons/io5";

const HeroSearch = () => {
    return (
        <>
            <div className='flex items-center border-b-[2px] w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex items-center justify-between text-[#82828A] w-full'>
                    <div className='flex flex-col'>
                        <h2 className=''>Location</h2>
                        <h2 className='text-black text-[16px] font-semibold'>Location</h2>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='lg:flex items-center border-b-[2px] w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex items-center justify-between text-[#82828A] w-full'>
                    <div className='flex flex-col'>
                        <h2 className=''>Type</h2>
                        <h2 className='text-black text-[16px] font-semibold'>Booking Type</h2>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='lg:flex items-center border-b-[2px] w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex flex-col'>
                    <h2 className=''>Date From</h2>
                    <h2 className='text-black text-[16px] font-semibold'>Date From</h2>
                </div>
            </div>

            <div className='lg:flex items-center border-b-[2px] w-1/5 text-[14px] space-x-2 pb-2'>
                <IoLocationSharp size={30} />
                <div className='flex flex-col'>
                    <h2 className=''>Guest</h2>
                    <h2 className='text-black text-[16px] font-semibold'>0</h2>
                </div>
            </div>

            <div className="bg-[#63AB45] text-white rounded-md gap-[10px] flex items-center px-2 cursor-pointer">
                <IoSearch />
                <button className="">Search</button>
            </div>

        </>
    )
}

export default HeroSearch