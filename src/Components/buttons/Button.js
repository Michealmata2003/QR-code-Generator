import React from 'react';
import './Button.css';

export const HeroButton = ({ children }) => {
  return (
    <>
      {/* <button className='text-[15px]  sm:text-lg lg:text-xl py-3 px-3.5 border-none  outline-0 bg-design2 hover:bg-logo font-medium rounded-md text-white'>{children} </button> */}
      <button className='text-[15px]  sm:text-lg lg:text-xl py-3 px-3.5 border-none  outline-0 bg-design2 font-medium rounded-md text-white'><span></span>{children}</button>
    </>
  )
}

export const CustomButton = ({ children }) => {
  return (
    <>
      {/* <button className='text-[15px]  sm:text-lg lg:text-xl py-3 px-3.5 border-none  outline-0 bg-design2 hover:bg-logo font-medium rounded-md text-white'>{children} </button> */}
      <button className='text-base  py-3 px-5 items-center border border-logo outline-0 bg-logo font-medium text-white'>{children}</button>
    </>
  )
}

export const CustomInputButton = ({ children }) => {
  return (
    <>
      {/* <button className='text-[15px]  sm:text-lg lg:text-xl py-3 px-3.5 border-none  outline-0 bg-design2 hover:bg-logo font-medium rounded-md text-white'>{children} </button> */}
      <button className='w-full text-base my-2 py-3 px-5 bg-logo  items-center outline-0  font-medium text-white'>{children}</button>
    </>
  )
}

// export const CustomAccountInputButton = ({ children }) => {
//   return (
//     <>
//       {/* <button className='text-[15px]  sm:text-lg lg:text-xl py-3 px-3.5 border-none  outline-0 bg-design2 hover:bg-logo font-medium rounded-md text-white'>{children} </button> */}
//       <button className='w-full text-base my-2 py-3 px-5 bg-design4 items-center outline-0  font-medium text-black hover:bg-black'>{children}</button>
//     </>
//   )
// }