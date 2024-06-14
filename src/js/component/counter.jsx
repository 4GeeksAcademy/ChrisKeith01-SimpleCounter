import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [ count, setCount ] = useState(0)
  const [ pause, setPause ] = useState(false)
  const [ countDown, setCountDown ] = useState(false)
  
  useEffect(() => {
    if(countDown === false) {
      const timer = setInterval(increaseTime, 1000)

      return () => clearInterval(timer)
    }

    if(countDown === true) {
      const timer = setInterval(decreaseTime, 1000)

      return () => clearInterval(timer)
    }

  }, [ count, pause, countDown ])


  const increaseTime = () => {
    if(pause === false) {
      setCount((count) => count + 1)
    }
  }

  const decreaseTime = () => {
    setCount((count) => count - 1)
  }

  const createCountDown = () => {
    setCountDown(true)
  }

  const pauseCounter = () => {
    setPause(!pause)
  }

  const resetCounter = () => {
    setCount(0)
    setCountDown(false)
  }

  return (
    <div>
      <div className="clock">
        <h1>{count < 10000 ? 0 : Math.floor((count / 10000) % 10)}</h1>
        <h1>{count < 1000 ? 0 : Math.floor((count / 1000) % 10)}</h1>
        <h1>{count < 100 ? 0 : Math.floor((count / 100) % 10)}</h1>
        <h1>{count < 10 ? 0 : Math.floor((count / 10) % 10)}</h1>
        <h1>{count % 10}</h1>
      </div>
    
      <div className="btn-controls">
        <button 
          onClick={() => increaseTime()}
        >
          Increase
        </button>
        <button 
          onClick={() => decreaseTime()}
        >
          Decrease
        </button>
        <button 
          onClick={() => createCountDown()}
        >
          Create CountDown
        </button>
        <button 
          onClick={() => pauseCounter()}
        >
          Pause Counter
        </button>
        <button 
          onClick={() => resetCounter()}
        >
          Reset Counter
        </button>
      </div>
    </div>
  )
}

export default Counter