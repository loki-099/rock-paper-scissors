import React, { useCallback, useEffect, useState } from 'react'

const Choices = ({ choice, setChoice, hidden, setHidden }) => {
  let down = 'translate-y-[7px]'
  const [classHidden, setClassHidden] = useState('')

  const handlePick = (e) => {
    let pickedButton = e.currentTarget
    let updateChoice = pickedButton.id
    setChoice(updateChoice)
    
    if (!hidden) {
      setClassHidden('hidden')
      setHidden(!hidden)
    }
  }

  useEffect(() => {
    if(!hidden) {
      setClassHidden('')
    }
  }, [hidden])

  const handleDown = useCallback((e) => {
    let event = e.currentTarget
    event.classList.add(down);
    document.addEventListener(
      "mouseup",
      () => {
        event.classList.remove(down)
      },
      { once: true }
    )
  }, [])

  return (
    <div className={`${classHidden} w-full max-w-[450px] h-[80%] absolute left-[50%] top-[50%] md:top-[60%] 2xl:top-[55%] translate-x-[-50%] translate-y-[-50%] fadeIn`}>
      <ul className="top-[50%] translate-y-[-50%] grid grid-cols-2 justify-items-center relative gap-y-2 md:gap-x-16">
        <img src="/bg-triangle.svg" alt="bg-triangle" className='absolute w-[60%] max-w-[300px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] -z-10' />
        <li className='relative'>
          <div className='bg-paperShadow absolute rounded-full top-[7px] w-full h-full -z-10'></div>
          <div className='bg-paper-gradient w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-full cursor-pointer' id='paper' onMouseDown={handleDown} onClick={handlePick}>
            <div className='bg-white w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full'>
              <img src="/icon-paper.svg" alt="" className='md:w-[75px]'/>
            </div>
          </div>
        </li>
        <li className='relative'>
          <div className='bg-scissorShadow absolute rounded-full top-[7px] w-full h-full -z-10'></div>
          <div className='bg-scissor-gradient w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-full cursor-pointer' id='scissor'
          onMouseDown={handleDown} onClick={handlePick}>
            <div className='bg-white w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full'>
              <img src="/icon-scissor.svg" alt="" className='md:w-[75px]'/>
            </div>
          </div>
        </li>
        <li className='col-start-1 col-end-3 relative'>
          <div className='bg-rockShadow absolute rounded-full top-[7px] w-full h-full -z-10'></div>
          <div className='bg-rock-gradient w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-full cursor-pointer' id='rock' onMouseDown={handleDown} onClick={handlePick}>
            <div className='bg-white w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full'>
              <img src="/icon-rock.svg" alt="" className='md:w-[75px]'/>
            </div>
          </div>
        </li>
      </ul>


    </div>
  )
}

export default Choices