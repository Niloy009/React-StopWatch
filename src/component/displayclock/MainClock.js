import React from 'react'

const MainClock = ({ min, sec, milisec }) => {
  return (
    <div className='display-4 text-center'>
      <span>{min < 10 ? `0${min} : ` : `${min}:`}</span>
      <span>{sec < 10 ? `0${sec} : ` : `${sec}:`}</span>
      <span>{milisec < 10 ? `0${milisec}` : `${milisec}`}</span>
    </div>
  )
}
export default MainClock
