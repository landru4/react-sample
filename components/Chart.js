import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import PieChart from '../components/PieChart'
import RiskChanger from '../components/RiskChanger'

class Chart extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      risk: this.props.risk
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="main-section container-fluid center-block">
            <h1 className="bg-primary">Portfolio</h1>
            <h2 className="text-primary">Risk profile</h2>
            <PieChart risk={this.props.risk}/>
            <RiskChanger risk={this.props.risk} />
        </div>
      </div>
    )
  }
}

export default Chart;
