export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case "ADD_USER":
      return {
        users: [action.payload, ...state.users],
      };
    case "EDIT_USER":
      // give condition for edit user
      const upadteUser = action.payload;
      const upadteUsers = state.users.map((user) => {
        if (user.id === upadteUser.id) {
          return upadteUser;
        }
        return user;
      });
      return {
        users: upadteUsers,
      };

    default:
      return state;
  }
};
