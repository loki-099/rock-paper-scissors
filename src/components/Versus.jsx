import React, { useEffect, useState } from 'react'
import PickComponent from './PickComponent';

const Versus = ({ choice, hidden, setHidden, score, setScore }) => {
  const [classHidden, setClassHidden] = useState('hidden')
  const randomChoices = ['rock', 'paper', 'scissor']
  const [randomChoice, setRandomChoice] = useState('')
  const [status, setStatus] = useState('Draw')
  const [startAnimation, setStartAnimation] = useState('false')

  const playAgain = () => {
    setHidden(!hidden)
  }

  const evalWinner = () => {
    if (choice == 'rock' && randomChoice == 'scissor'){
      setStatus('You win')
    }
    else if (choice == 'rock' && randomChoice == 'paper'){
      setStatus('You lose')
    }
    else if (choice == 'paper' && randomChoice == 'scissor'){
      setStatus('You lose')
    }
    else if (choice == 'paper' && randomChoice == 'rock'){
      setStatus('You win')
    }
    else if (choice == 'scissor' && randomChoice == 'rock'){
      setStatus('You lose')
    }
    else if (choice == 'scissor' && randomChoice == 'paper'){
      setStatus('You win')
    }
    else {
      setStatus('Draw')
    }
  }

  useEffect(() => {
    if(hidden) { 
      setClassHidden('')
      setStatus('Draw')
      setRandomChoice(randomChoices[Math.floor(Math.random()*randomChoices.length)])
    }
    else{
      setClassHidden('hidden')
    }
  }, [hidden])

  const updateScore = () => {
    if (status == 'You win') {
      setScore(score + 1)
    }
    else if (status == 'You lose') {
      if (score != 0) {
        setScore(score - 1)
      }
    }
  }

  useEffect(evalWinner, [classHidden])
  useEffect(updateScore, [status])

  return (
    <div className={`${classHidden} w-full max-w-[450px] absolute left-[50%] top-36 bottom-20 md:top-[30%] 2xl:top-[15%] translate-x-[-50%] flex flex-col items-center justify-evenly md:bottom-28 fadeIn`}> 
      <div className='w-full flex justify-around items-center md:gap-x-[420px]'>
        <PickComponent choice={choice}></PickComponent>
        <PickComponent choice={randomChoice} player={'ai'}></PickComponent>
      </div>
      <div className='text-center flex flex-col items-center gap-4 md:absolute'>
        <h1 className='text-white uppercase font-semibold text-5xl'>{status}</h1>
        <button className='bg-white text-scoreText uppercase font-semibold tracking-widest py-3 rounded-lg w-[250px] hover:text-red-400' onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Versus