import React from 'react'

const Rules = ({ onOpen }) => {
  return (
    <>
      <button className='absolute bottom-12 uppercase border-2 w-[156px] border-headerOutline px-8 py-1 rounded-md text-white tracking-widest left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0 right-8 md:bottom-7 md:w-[140px] md:py-2' onClick={onOpen}>Rules</button>
    </>
  )
}

export default Rules