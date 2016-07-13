import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import rd3 from 'react-d3';

import { showRisks } from '../actions/index';

class RiskChanger extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.showRisks(parseInt(e.target.value));
  }
  render() {
    return (
            <div className="risk-level center-block">
              <h2><span className="text-primary">Risk level: {this.props.risk.riskLevel}</span></h2>
                <div className="risk-level-input">
                  <input type="range"
                      value={this.props.risk.riskLevel}
                      min={1}
                      max={10}
                      onChange={this.handleChange}
                      step={1} />
                </div>
            </div>
    )
  }
}

RiskChanger.propTypes = {
  showRisks: PropTypes.func
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showRisks }, dispatch);
}

export default connect(null, mapDispatchToProps)(RiskChanger);
