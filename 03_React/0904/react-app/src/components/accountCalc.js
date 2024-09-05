// function accountCalc(balance, action) {
//   switch (action.type) {
//     case "deposit":
//       return balance + action.amount;
//     case "withdraw":
//       return balance - action.amount;
//     default:
//       return balance;
//   }
// }

// export default accountCalc;

// 복습

function accountCalc(state, action) {
  switch (action.type) {
    case "deposit":
      return state + action.amount;
    case "withdraw":
      return state - action.amount;
    default:
      return state;
  }
}

export default accountCalc;
