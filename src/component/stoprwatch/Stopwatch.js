import React, { Component } from 'react'
import MainClock from '../displayclock/MainClock'
import Buttons from '../button/Button'
import LapsList from '../lapslist/LapsList'

class Stopwatch extends Component {
  intervalId = null
  state = {
    min: 0,
    sec: 0,
    milisec: 0,
    IsRunning: false,
    list: []
  }
  clickHandler = () => {
    if (this.state.IsRunning) {
      clearInterval(this.intervalId)
      this.setState(prev => ({
        IsRunning: false
      }))
    } else {
      this.intervalId = setInterval(() => {
        let { min, sec, milisec } = this.state

        if (sec > 60) {
          min += 1
          sec = 0
        }
        if (milisec > 10) {
          sec += 1
          milisec = 0
        }

        this.setState({
          min,
          sec,
          milisec: milisec + 1,
          IsRunning: true
        })
      }, 100)
    }
  }

  lapHandler = () => {
    this.setState(prev => {
      let { min, sec, milisec } = this.state
      prev.list.unshift({ min: min, sec: sec, milisec: milisec })
      return {
        ...prev
      }
    })
  }

  resetHandler = () => {
    this.setState({
      min: 0,
      sec: 0,
      milisec: 0,
      IsRunning: false,
      list: []
    })
  }

  render () {
    let { min, sec, milisec } = this.state
    return (
      <div className='container'>
        <h2 className='display-2 text-center'>React Stopwatch</h2>
        <MainClock min={min} sec={sec} milisec={milisec} />
        <Buttons
          clickHandler={this.clickHandler}
          IsRunning={this.state.IsRunning}
          lapHandler={this.lapHandler}
          resetHandler={this.resetHandler}
        />
        <LapsList list={this.state.list} />

      </div>
    )
  }
}

export default Stopwatch
