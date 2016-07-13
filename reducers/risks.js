import { LOAD_RISK } from '../constants/ActionTypes'

// dummay() {
//   return [[2,3,23,45,23,6], [21,32,3,32,32,3], [14,25,30,20,12,4], [4,7,30,40,16,18], [10,15,25,37,5,7], [7,10,31,11,12,3], [4,7,3,8,11,5], [20,11,3,17,16,17], [21,32,13,27,8,4], [17,27,9,14,20,6]].map(getJSON)
// }
// getJSON(data) {
//   return
//         { pieData: [
//                 {label: 'Stocks', value: data[0] },
//                 {label: 'Bonds', value: data[1] },
//                 {label: 'ETFs', value: data[2] },
//                 {label: 'Cash', value: data[3] },
//                 {label: 'Commodities', value: data[4] },
//                 {label: 'Fixed Income', value: data[5] }
//               ], riskLevel: 1 
//         }
// }
const initialState = [
  { pieData: [
          {label: 'Stocks', value: 2.0},
          {label: 'Bonds', value: 3.0},
          {label: 'ETFs', value: 4.0 },
          {label: 'Cash', value: 5.0 },
          {label: 'Commodities', value: 6.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 1 
  },
  { pieData: [
          {label: 'Stocks', value: 78.0},
          {label: 'Bonds', value: 33.0},
          {label: 'ETFs', value: 75.0 },
          {label: 'Cash', value: 47.0 },
          {label: 'Commodities', value: 14.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 2
  },
  { pieData: [
          {label: 'Stocks', value: 11.0},
          {label: 'Bonds', value: 23.0},
          {label: 'ETFs', value: 58.0 },
          {label: 'Cash', value: 9.0 },
          {label: 'Commodities', value: 8.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 3 
  },
  { pieData: [
          {label: 'Stocks', value: 10.0},
          {label: 'Bonds', value: 15.0},
          {label: 'ETFs', value: 20.0 },
          {label: 'Cash', value: 25.0 },
          {label: 'Commodities', value: 15.0 },
          {label: 'Fixed Income', value: 2.0 }
        ], riskLevel: 4 
  },
  { pieData: [
          {label: 'Stocks', value: 2.0},
          {label: 'Bonds', value: 3.0},
          {label: 'ETFs', value: 4.0 },
          {label: 'Cash', value: 5.0 },
          {label: 'Commodities', value: 6.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 5 
  },
  { pieData: [
          {label: 'Stocks', value: 78.0},
          {label: 'Bonds', value: 33.0},
          {label: 'ETFs', value: 75.0 },
          {label: 'Cash', value: 47.0 },
          {label: 'Commodities', value: 14.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 6 
  },
  { pieData: [
          {label: 'Stocks', value: 11.0},
          {label: 'Bonds', value: 23.0},
          {label: 'ETFs', value: 58.0 },
          {label: 'Cash', value: 9.0 },
          {label: 'Commodities', value: 8.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 7 
  },
  { pieData: [
          {label: 'Stocks', value: 11.0},
          {label: 'Bonds', value: 23.0},
          {label: 'ETFs', value: 58.0 },
          {label: 'Cash', value: 9.0 },
          {label: 'Commodities', value: 8.0 },
          {label: 'Fixed Income', value: 7.0 }
        ], riskLevel: 8 
  },
  { pieData: [
          {label: 'Stocks', value: 15.0},
          {label: 'Bonds', value: 75.0},
          {label: 'ETFs', value: 8.0 },
          {label: 'Cash', value: 2.0 },
          {label: 'Commodities', value: 1.0 },
          {label: 'Fixed Income', value: 5.0 }
        ], riskLevel: 9 
  },
  { pieData: [
          {label: 'Stocks', value: 36.0},
          {label: 'Bonds', value: 12.0},
          {label: 'ETFs', value: 22.0 },
          {label: 'Cash', value: 1.0 },
          {label: 'Commodities', value: 17.0 },
          {label: 'Fixed Income', value: 21.0 }
        ], riskLevel: 10
  }
  ]

export default function(state = initialState[0], action) {
  let example = dummay();
console.log(example);
  switch (action.type) {
    case LOAD_RISK:
      var newState = initialState[action.riskLevel-1];
      // console.log("new state: ", newState);
      return newState;
    default:
      return state
  }
}
