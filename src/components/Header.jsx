import React from 'react'

const Header = ({ score }) => {
  return (
    <div className='w-[90%] max-w-[700px] h-[120px] md:h-[155px] border-[3px] rounded-2xl border-headerOutline flex items-center justify-between px-4 mx-auto relative top-6 md:top-6'>
      <img src="/assets/logo.svg" alt="title" className='w-[100px] md:w-fit'/>
      <div className='bg-white w-[90px] md:w-[150px] h-[90px] md:h-[115px] rounded-md flex flex-col items-center justify-center p-2'>
        <p className='uppercase text-scoreText font-bold text-xs md:text-lg tracking-wider'>Score</p>
        <h2 className='font-bold text-darkText text-5xl md:text-6xl leading-[2.5rem]'>{score}</h2>

      </div>
    </div>
  )
}

export default Header