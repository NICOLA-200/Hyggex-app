import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import NavigatorX from './Components/NavigatorX'
import Body from './Components/Body'
import { FaPlusCircle } from "react-icons/fa";
import logo2 from './assets/logo2.svg'
import Faq from './Components/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full w-screen xl:px-32 md: sm:px-16 px-7 bg-[#F9F9F9] overflow-hidden'>
      <Navbar />
      <NavigatorX />
      <Body />
     
      <div className='flex  justify-between md:px-10 items-center mt-20'>
          <img src={logo2} alt="" className='w-[8rem] md:w-auto' />
          <div className='flex md:gap-4 items-center'>
             <FaPlusCircle size={50} color='#164EC0' />
             <span className='md:text-3xl font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text'>Create Flashcard</span>
          </div>
       </div>
         
       <div className=' mb-32 max-w-[820px]'>  
           <Faq />
       </div>
    </div>
  )
}

export default App
