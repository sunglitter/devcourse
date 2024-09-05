// function countReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       //   return state + 1;
//       return action.icon;
//     case "DECREMENT":
//       //   return state - 1;
//       return action.icon;
//     default:
//       return state;
//   }
// }
// export default countReducer;

// 복습 1

// function countReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// export default countReducer;

// 복습 2

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return action.icon;
    case "DECREMENT":
      return action.icon;
    default:
      return state;
  }
}

export default countReducer;
