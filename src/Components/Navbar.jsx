import React, { useState } from 'react'
import hyggex from '../assets/hyggex.png'
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
     const [showMenu, setShowMenu] =  useState();
  return (
     <div className='items-center w-full text-[18px] py-8 justify-between flex'>
     <div>
          <img src={hyggex} alt="logo"  />
     </div>

     <div className='hidden md:block'>
          <ul className='flex xl:gap-8 gap-3  items-center' >
               <li className='hover:text-blue-400'>Home</li>
               <li className='hover:text-blue-400'>Flashcard</li>
               <li className='hover:text-blue-400'>Contact</li>
               <li className='hover:text-blue-400'>FAQ</li>
               <li className='rounded-full w-[128px] h-[48px] text-center p-2 bg-gradient-to-b from-[#06286E] text-white to-[#164EC0]'>Login</li>
           
          </ul>
     </div>
{showMenu && 
     <div className='absolute w-[90vw]  top-20  md:hidden'>
     <ul className='flex flex-col py-10  bg-white  xl:gap-8 gap-3  items-center' >
               <li className='hover:text-blue-400'>Home</li>
               <li className='hover:text-blue-400'>Flashcard</li>
               <li className='hover:text-blue-400'>Contact</li>
               <li className='hover:text-blue-400'>FAQ</li>
               <li className='rounded-full w-[128px] h-[48px] text-center p-2 bg-gradient-to-b from-[#06286E] text-white to-[#164EC0]'>Login</li>
           
          </ul>
     </div>
     }

    <div className='md:hidden'>
     <button onClick={() => {setShowMenu(prev => !prev)} }>
     <IoMenu />
     </button>
     </div>

 </div>
  )
}



