function imgReducer(state, action) {
  switch (action.type) {
    case "HAMBURGER":
      return action.icon;
    case "FRENCHFRIES":
      return action.icon;
    case "COLA":
      return action.icon;
    case "SOFTICECREAM":
      return action.icon;
    default:
      return state;
  }
}

export default imgReducer;
