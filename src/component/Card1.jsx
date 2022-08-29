import React from 'react'
import {AiOutlineUser,AiOutlineSolution} from 'react-icons/ai'
import {RiCustomerService2Line} from 'react-icons/ri'

export default function Card1() {
        return (
            <div className='max-w-full flex flex-col justify-center items-center lg:items-start sm:flex-row'>
                    <div className='w-[180px] h-[200px] bg-white shadow-xl flex flex-col justify-evenly items-center rounded-lg m-2'>
                        <div className='bg-[#06283D] w-[40%] h-[90px] rounded-2xl'>
                            <AiOutlineUser size={50} className='relative left-3 top-5'/>
                        </div>
                        <div className='text-gray-500 font-bold'>
                            <b className='text-2xl'>288</b>
                            <p className='text-xl'>User</p>
                        </div>
                    </div>
                    <div className='w-[180px] h-[200px] bg-white shadow-xl flex flex-col justify-evenly items-center rounded-lg m-2'>
                        <div className='bg-[#06283D] w-[40%] h-[90px] rounded-2xl'>
                            <AiOutlineSolution size={50} className='relative left-3 top-5'/>
                        </div>
                        <div className='text-gray-500 font-bold'>
                            <h1 className='text-2xl text-center'>288</h1>
                            <p className='text-xl text-center'>Borrower</p>
                        </div>
                    </div>
                    <div className='w-[180px] h-[200px] bg-white shadow-xl flex flex-col justify-evenly items-center rounded-lg m-2'>
                        <div className='bg-[#06283D] w-[40%] h-[90px] rounded-2xl'>
                            <RiCustomerService2Line size={50} className='relative left-3 top-5'/>
                        </div>
                        <div className='text-gray-500 font-bold'>
                            <h1 className='text-2xl text-center'>388</h1>
                            <p className='text-xl text-center'>Adviser</p>
                        </div>
                    </div>
            </div>
        )
}
