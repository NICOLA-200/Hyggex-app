/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const FAQ1 = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={` bg-white  border shadow-sm shadow-gray-800 rounded-lg p-2 align-middle my-3`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className='flex justify-between'  ><span>{faq.question}</span> <span className={`${faq.open && "rotate-180" }`}><FaChevronDown /></span></div>
      <br  className="text-black"/>
      <div className={`${faq.open ? "block" :  "hidden" }`} >{faq.answer}</div>
    </div>
  );
};

export default FAQ1;
