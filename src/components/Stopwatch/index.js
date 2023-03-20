// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeMinutes: 0, timerSeconds: 0}

  componentWillUnmount = () => {
    this.clearInterval()
  }

  clearInterval = () => {
    clearInterval(this.intervalId)
  }

  IncrementTimeSeconds = () => {
    this.setState(prevState => ({timerSeconds: prevState.timerSeconds + 1}))
  }

  StartButton = () => {
    this.intervalId = setInterval(this.IncrementTimeSeconds, 1000)
  }

  Stopbutton = () => {
    this.clearInterval()
  }

  Reset = () => {
    this.clearInterval()
    this.setState({timerSeconds: 0})
  }

  getTimeFormat = () => {
    const {timeMinutes, timerSeconds} = this.state
    const stopTimer = timeMinutes * 60 + timerSeconds

    const minutes = Math.floor(stopTimer / 60)
    const seconds = Math.floor(stopTimer % 60)
    const stringfyMin = minutes > 9 ? minutes : `0${minutes}`
    const stringfySec = seconds > 9 ? seconds : `0${seconds}`

    return `${stringfyMin}:${stringfySec}`
  }

  render() {
    const imgTimer =
      'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png '
    return (
      <div className="container1">
        <h1 className="Main-heading">Stopwatch</h1>
        <div className="container2">
          <div className="stop-watch-img-text-cont">
            <img src={imgTimer} alt="stopwatch" className="img-timer" />
            <h className="stop-watch-header-style">Timer</h>
          </div>
          <h1 className="">{this.getTimeFormat()}</h1>
          <div className="button-container">
            <button
              className="button-style b1-color"
              type="button"
              onClick={this.StartButton}
            >
              Start
            </button>
            <button
              className="button-style b2-color"
              type="button"
              onClick={this.Stopbutton}
            >
              Stop
            </button>
            <button
              className="button-style b3-color"
              type="button"
              onClick={this.Reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
