import React,{ useState } from 'react'
import { AiOutlinePoweroff, } from 'react-icons/ai'
import { BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import DesktopNav from './DesktopNav';
import DesktopNav2 from './DesktopNav2';
import MobileNav from './MobileNav';

export default function SideBar(props) {
    const [toggle,setTogle] = useState(true);
    const [Drpdown,setDrpdown] = useState(false);

    const ToggleHandle=()=>{
        setTogle(!toggle);
    }

    const DrpDownHandle=()=>{
        setDrpdown(!Drpdown);
    }
  return (
    <> 
        <div className='flex flex-row'>
            {
            toggle ?
            <DesktopNav Click={DrpDownHandle} Drpdown={Drpdown}/>
                :
            <DesktopNav2/>
            }
            {
                toggle ? <MobileNav OnClose={()=>(setTogle(false))}/> : null
            }
            <div className='max-w-screen-full w-full flex flex-col justify-between'>
                <div className='max-w-full flex flex-row justify-between h-14 bg-white rounded-lg'>
                    <button onClick={ToggleHandle} className='w-[40px] m-2 bg-gray-800 rounded-lg'>
                        <BiMenuAltLeft size={40} fill='white'/>
                    </button>
                    <h1 className='text-[#06283D] text-xl p-4 font-bold'>{props.pages}</h1>
                    <Link to={'/'} className="flex h-full items-center mx-5">
                        <AiOutlinePoweroff size={30} fill='black'/>
                        <span className='text-lg font-bold text-black mx-2'>Logout</span>
                    </Link>
                </div>
                <div className='w-[95%] mx-auto'>
                    {props.children}
                </div>
                <footer className='max-w-full bg-white'>
                    <h1 className='text-black font-semibold p-4'>
                        copyright@ridho.id
                    </h1>
                </footer>
            </div>
        </div>
    </>
  )
}
