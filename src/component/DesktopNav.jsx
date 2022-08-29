import React from 'react'
import { AiOutlineHome,AiOutlineUser } from 'react-icons/ai'
import {BiPencil, BiDownArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
export default function DesktopNav( props) {
  return (
    <div className='max-w-[240px] w-full bg-[#06283D] max-h-full hidden lg:flex flex-col'>
                <div className='bg-sky-400 w-[95px] h-[95px] m-3'>
                        <h1 className='text-2xl font-bold text-center relative top-5'>RXDXO</h1>
                </div>
                <div className='h-[500px] mx-auto flex flex-col gap-6 mt-[30px] w-[90%]'>
                    <Link to={'/'} className='flex flex-row items-center'>
                        <AiOutlineHome size={25}/>
                        <span className='p-2'>Dasboard</span>
                    </Link>
                    <Link to={'/user'} className='flex flex-row items-center'>
                        <AiOutlineUser size={25}/>
                        <span className='p-2'>User Management</span>
                    </Link>
                    <button onClick={props.Click} className={props.Drpdown ? 'bg-black/20 flex flex-row items-center' : 'flex flex-row items-center' }>
                        <BiPencil size={25}/>
                        <span className='p-2'>News</span>
                        <BiDownArrowAlt size={25} className={ props.Drpdown ? 
                        'relative left-20 transition ease-out -rotate-180' :'relative left-20 transition ease-out'
                        }/>
                    </button>
                    {/* dropdown */}
                    { props.Drpdown ? 
                    <Link to='/addnews' className='flex flex-row items-center p-4'>
                        Add News
                    </Link>
                    : null
                    }
                </div> 
            </div> 
  )
}
