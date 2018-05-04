import React from 'react'
import ReactDom from 'react-dom'

export class HealthTracker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      healthvalue: 0
    }

    this.handleHealthChange = this.handleHealthChange.bind(this)
  }

  handleHealthChange (e) {
    this.setState({
      healthvalue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="number" name={this.props.title} value={this.state.healthvalue} min="0" onChange={this.handleHealthChange} />
          <p>Current</p>
        </div>
        <div>
          <input type="number" name={this.props.title + "_threshold"} value={this.props.threshold} disabled="true" />
          <p>Threshold</p>
        </div>
      </div>
    )
  }
}

export default HealthTracker;
