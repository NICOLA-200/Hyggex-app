import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";

export default function NavigatorX() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className='flex gap-2 items-center my-4'>
      {activeIndex >= 0 && (
        <div onClick={handleClick} className='cursor-pointer'>
          <GoHome size={30} color='' />
        </div>
      )}

      {activeIndex >= 1 && (
        <div onClick={handleClick} className='space-x-2 flex items-center cursor-pointer'>
          <FaAngleRight />
          <span>Flashcard</span>
        </div>
      )}

      {activeIndex >= 2 && (
        <div onClick={handleClick} className='space-x-2 flex items-center cursor-pointer'>
          <FaAngleRight />
          <span>Mathematics</span>
        </div>
      )}

      {activeIndex >= 3 && (
        <div className='space-x-2 flex items-center'>
          <FaAngleRight />
          <span className='text-[#06286E] font-bold line-clamp-1'>Relation and Function</span>
        </div>
      )}
    </div>
  );
}
