import React from 'react'

export default function Data() {
  return (
    <div className='flex flex-col justify-evenly gap-2 my-5 md:flex-row'>
                    <div className='w-full bg-white shadow-xl'>
                        <div className='border-l-[3px] border-sky-500 m-4'>
                            <h1 className='font-bold text-gray-700 p-1 text-2xl'>9.000</h1>
                            <p className='font-bold text-gray-500 p-1'>Belum diproses</p>
                            <span className='font-bold text-gray-500 p-1' >50%</span>
                            <progress className="progress progress-info w-full mx-2" value="56" max="100"></progress>
                        </div>
                    </div>
                    <div className='w-full bg-white shadow-xl'>
                        <div className='border-l-[3px] border-red-400 m-4'>
                            <h1 className='font-bold text-gray-700 p-1 text-2xl'>22.643</h1>
                            <p  className='font-bold text-gray-500 p-1'>Sudah diproses</p>
                            <span className='font-bold text-gray-500 p-1' >80%</span>
                            <progress className="progress progress-error w-full mx-2" value="88" max="100"> </progress>
                        </div>
                    </div>
                    <div className='w-full bg-white shadow-xl'>
                        <div className='border-l-[3px] border-yellow-500 m-4'>
                            <h1 className='font-bold text-gray-700 p-1 text-2xl'>73.230</h1>
                            <p  className='font-bold text-gray-500 p-1'>Costumer</p>
                            <span className='font-bold text-gray-500 p-1' >97%</span>
                            <progress className="progress progress-warning w-full mx-2" value="97" max="100"> </progress>
                        </div>
                    </div>
    </div>  
  )
}
