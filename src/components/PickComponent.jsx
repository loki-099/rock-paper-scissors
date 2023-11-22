import React from 'react'

const PickComponent = ({ choice, player='player' }) => {
  let playAnimation
  player == 'ai' ? playAnimation = 'slideLeft' : playAnimation = ''

  return (
    <div className='flex flex-col items-center gap-4 md:flex-col-reverse md:gap-8'>
      <div className={`relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] ${playAnimation}`}>
          <div className={`bg-${choice}Shadow absolute rounded-full top-[7px] w-full h-full -z-10`}></div>
          <div className={`bg-${choice}-gradient w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-full`}>
            <div className='bg-white w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full'>
              <img src={`./assets/icon-${choice}.svg`} alt="" className='md:w-[75px]'/>
            </div>
          </div>
        </div>
        <h1 className='text-white uppercase font-semibold tracking-wider'>{player == 'player' ? 'You Picked' : 'The House Picked'}</h1>
    </div>
  )
}

export default PickComponent