import React, { useState } from 'react'

const Modal = ({ isOpen, setModalState }) => {
  const [outFade, setOutFade] = useState('')
  let displayState
  isOpen ? displayState= 'fadeIn' : displayState='hidden'

  const handleCloseModal = () => {
    setOutFade('fadeOut')
    setTimeout(() => {
      setModalState(!isOpen)
      setOutFade('')
    }, 150);
  }
 
  return (
    <div className={`${displayState} ${outFade} absolute top-0 right-0 bottom-0 left-0 bg-black/30 z-50`}>
      <div className={`bg-white w-full h-screen text-center flex flex-col justify-center md:max-w-[400px] md:max-h-[400px] md:absolute md:justify-start md:p-8 md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-lg`}>
        <h1 className='uppercase font-[700] text-3xl text-darkText mb-28 md:hidden'>Rules</h1>
        <div className='hidden md:flex items-center justify-between mb-8'>
          <h1 className='uppercase font-[700] text-3xl text-darkText'>Rules Testing</h1>
          <img src="/icon-close.svg" alt="close" className='cursor-pointer' onClick={handleCloseModal}/>
        </div>
        <img src="/image-rules.svg" alt="rules" className='mx-auto mb-28 md:mb-0'/>
        <img src="/icon-close.svg" alt="close" className='mx-auto cursor-pointer md:hidden' onClick={handleCloseModal}/>
      </div>
    </div>
  )
}

export default Modal