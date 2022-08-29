import React from 'react'
import {BiPencil} from 'react-icons/bi'
import { AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function DesktopNav2() {
  return (
           <div className='hidden max-w-[130px] bg-[#06283D] max-h-full md:flex flex-col'>
                <div className='bg-sky-400 w-[95px] h-[95px] m-3'>
                        <h1 className='text-2xl font-bold text-center relative top-5'>RXDXO</h1>
                </div>
                <div className='h-[500px] w-[50px] mx-auto flex flex-col gap-5 items-center mt-[30px]'>
                    <Link to={'/'} className='flex flex-row pt-3 items-center'>
                        <AiOutlineHome size={25}/>
                    </Link>
                    <Link to={'/user'} className='flex flex-row pt-3 items-center'>
                        <AiOutlineUser size={25}/>
                    </Link>
                    <Link to={'/addnews'} className='flex flex-row pt-3 items-center'>
                        <BiPencil size={25}/>
                    </Link> 
                </div> 
            </div>
  )
}
