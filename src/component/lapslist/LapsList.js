import React from 'react'

const LapsList = ({ list }) => {
  return (
    <ul className='list-group'>
      {list.map((list, index) => {
        return (
          <li key={index} className='list-group-item text-center mx-auto'>
            {`Min: ${list.min} Sec: ${list.sec} MiliSec: ${list.milisec}`}
          </li>
        )
      })}

    </ul>
  )
}
export default LapsList
