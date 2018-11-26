import React from 'react'

const Buttons = ({ IsRunning, clickHandler, resetHandler, lapHandler }) => {
  return (
    <div className='text-center m-3'>
      <button
        onClick={clickHandler}
        className='btn btn-success btn-lg mx-auto d-inline-block'
      >
        {IsRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={IsRunning ? lapHandler : resetHandler}
        className='btn btn-danger btn-lg d-inline-block ml-4'
      >
        {IsRunning ? 'Lap' : 'Reset'}
      </button>
    </div>
  )
}
export default Buttons
