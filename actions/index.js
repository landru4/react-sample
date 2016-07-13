import * as types from '../constants/ActionTypes'

export function showRisks(riskLevel) {
  return { type: types.LOAD_RISK, riskLevel: riskLevel }
}