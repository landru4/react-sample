import { combineReducers } from 'redux'
import risk from './risks.js'

const rootReducer = combineReducers({
  risk: risk
})

export default rootReducer
