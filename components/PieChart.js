import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import rd3 from 'react-d3';

class PieChart extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      risk: this.props.risk,
      unit: document.body.clientWidth
    }
  }
  forceUpdate() {
    this.setState({unit: document.body.clientWidth});
  }
  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())
  }
  render() {

    //For resize de component proporcions
    const unit = this.state.unit/9;
    const width = unit*4;
    const height = unit*4;
    const radius = unit;
    const innerRadius = unit/3;
    return (
            <div className="chart">
              <rd3.PieChart id="pieChart"
                data={this.props.risk.pieData}
                width={width}
                height={height}
                radius={radius}
                innerRadius={innerRadius}
                sectorBorderColor="white"
              />
            </div>
    )
  }
}

export default PieChart;
