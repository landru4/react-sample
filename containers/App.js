import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Chart from '../components/Chart'

class App extends Component {
  render() {
    return (
            <section>
              <Chart risk={this.props.risk}/>
            </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    risk: state.risk
  }
}

export default connect(
  mapStateToProps
)(App)
