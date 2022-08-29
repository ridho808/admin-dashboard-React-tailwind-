import React  from 'react'
import SideBar from '../component/SideBar'
import Card1 from '../component/Card1'
import Card2 from '../component/Card2'
import Data from '../component/Data'
export default function Dasboard() {
   

  return (
    <div>
        <SideBar pages='Dasboard'>
            <div className='self-start m-4'>
                <h1 className='text-sky-600 text-xl font-bold'>DASHBOARD</h1>
                <h3 className='text-gray-500 text-lg font-bold'>User Quantity</h3>
            </div>
            <div className='flex flex-col w-full xl:flex-row'>
                {/* card */}
                <Card1/>
                {/* Card2 */}
                <Card2/>
            </div>
            <div className='flex flex-col mb-4'>
                <h1 className='text-3xl font-bold text-sky-700 text-start m-2'>Data & Analytics</h1>
                <p className='text-lg font-bold text-gray-500 m-2'>Show update of post</p>
                {/* Data */}
                <Data/>           
            </div>
        </SideBar>
    </div>
  )
}
