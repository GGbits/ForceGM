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
        <input type="number" name={this.props.title} value={this.state.healthvalue} min="0" onChange={this.handleHealthChange} />
        <p>{this.props.threshold}</p>
      </div>
    )
  }
}

export default HealthTracker;
