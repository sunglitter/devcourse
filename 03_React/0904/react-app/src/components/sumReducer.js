// function sumReducer(sum, action) {
//   switch (action.type) {
//     case "HAMBURGER":
//       return sum + action.price;
//     case "FRENCHFRIES":
//       return sum + action.price;
//     case "COLA":
//       return sum + action.price;
//     case "SOFTICECREAM":
//       return sum + action.price;
//     default:
//       return sum;
//   }
// }

// export default sumReducer;

// 복습
function sumReducer(state, action) {
  switch (action.type) {
    case "햄버거":
      return state + action.price;
    case "감자튀김":
      return state + action.price;
    case "음료":
      return state + action.price;
    case "아이스크림":
      return state + action.price;
    default:
      return state;
  }
}

export default sumReducer;
