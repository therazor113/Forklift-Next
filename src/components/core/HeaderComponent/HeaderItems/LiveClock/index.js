import { Component } from 'react'

class LiveClock extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 500)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({ date: new Date() })
  }

  render () {
    return (
      <h2 suppressHydrationWarning>
        {this.state.date.toDateString() + ' ' + this.state.date.toLocaleTimeString()}
      </h2>
    )
  }
}

export default LiveClock
