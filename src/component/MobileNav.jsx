import React from 'react'
import {BiPencil} from 'react-icons/bi'
import { AiOutlineArrowLeft, AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function MobileNav(props) {
  return (
    <div className='max-w-[130px] bg-[#06283D] min-h-[100vh] fixed flex flex-col md:hidden z-10'>
                <div className='bg-sky-400 w-[60px] h-[60px] m-3'>
                        <h1 className='text-sm font-bold text-center relative top-5'>RXDXO</h1>
                </div>
                <div className='h-[500px] w-[50px] mx-auto flex flex-col gap-5 items-center mt-[30px]'>
                    <Link to={'/'} className='flex flex-row pt-3 items-center Dash'>
                        <AiOutlineHome size={25}/>
                        <div className='dashboard'>
                            Dashboard
                        </div>
                    </Link>
                    <Link to={'/user'} className='flex flex-row pt-3 items-center Usr'>
                        <AiOutlineUser size={25}/>
                        <div className='user'>
                            User Management
                        </div>
                    </Link>
                    <Link to={'/addnews'} className='flex flex-row pt-3 items-center News'>
                        <BiPencil size={25}/>
                        <div className='addnews'>
                            Add news
                        </div>
                    </Link> 
                </div> 
                <button className='self-center' onClick={props.OnClose}>
                    <AiOutlineArrowLeft size={35}/>
                </button>
            </div>
  )
}
