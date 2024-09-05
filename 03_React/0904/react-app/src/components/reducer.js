function reducer(state, action) {
  switch (action.type) {
    case "addMember":
      return {
        count: state.count + 1,
        member: [...state.member, action.newUser],
      };
    case "deleteMember":
      return {
        count: state.count - 1,
        member: state.member.filter((user) => user.name !== action.username),
      };
    default:
      return state;
  }
}

export default reducer;
