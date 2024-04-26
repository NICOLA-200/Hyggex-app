import React, { useState } from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Vector from '../assets/Vector.svg'
import { IoMdVolumeHigh } from "react-icons/io";
import { AiTwotoneBulb } from "react-icons/ai";



export default function Body() {
  const [count, setCount] = useState(1);


  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div className='my-16'>
       <h1 className='text-3xl  font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text'>Relations and Functions ( Mathematics )</h1>

       <div className='py-20'>
       <ul className='flex md:gap-16 gap-8 justify-center'>
          <li className={`cursor-pointer ${activeTab === 0 ? 'text-blue-900 font-semibold  underline' : 'text-black'}`} onClick={() => handleTabClick(0)}> <span className='p-2'>Study </span> </li>
          <li className={`cursor-pointer ${activeTab === 1 ? 'text-blue-900 font-semibold  underline' : 'text-black'}`} onClick={() => handleTabClick(1)}> <span className='p-2'>Quiz  </span> </li>
          <li className={`cursor-pointer ${activeTab === 2 ? 'text-blue-700 font-semibold  underline' : 'text-black'}`} onClick={() => handleTabClick(2)}> <span className='p-2'>Test  </span> </li>
          <li className={`cursor-pointer ${activeTab === 3 ? 'text-blue-800 font-semibold  underline' : 'text-black'}`} onClick={() => handleTabClick(3)}> <span className='p-2'>Game  </span> </li>
          <li className={`cursor-pointer ${activeTab === 4 ? 'text-blue-800 font-semibold  underline' : 'text-black'}`} onClick={() => handleTabClick(4)}> <span className='p-2'>Others</span> </li>
        </ul>
               
       </div>

       <div className=' max-w-[712px]  mx-auto'>
            <div className='max-w-[712px] h-[485px] bg-gradient-to-bl mx-auto rounded-[3rem] to-[#5F95EB] from-[#051A91] '>
              <div className='flex justify-between p-10'>
                   <AiTwotoneBulb size={30} color='white' />
                   <IoMdVolumeHigh size={30}  color='white' />
              
              </div> 
              <div className='text-center mt-32 text-3xl font-bold text-white'>
              9 + 6 + 7x - 2x - 3
              </div>  

            </div>
            <div className='flex  justify-between mt-10 items-center px-10'>
                 <VscDebugRestart size={30} className='text-blue-900' />
                 <FaChevronLeft onClick={() => {setCount(prev => --prev)}} className='bg-gradient-to-b rounded-full mx-auto p-2 w-[35px] h-auto text-white to-[#06286E] from-[#164EC0]' />
                 <div className='text-xl'>0{count}/10</div>
 
                 <FaChevronRight onClick={() => {setCount(prev => ++prev)}} className='bg-gradient-to-b rounded-full mx-auto p-2 w-[35px] h-auto text-white to-[#06286E] from-[#164EC0]' />
                 <img src={Vector} alt="" />
            </div>
       </div> 

    
    </div>
  )
}
