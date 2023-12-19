const state = {
    users: [],
  };

const onUserChanged = (updateUser) => {
    let wasFound = false;
    state.users = state.users.map((user) => {
      if (user.id === updateUser.id) {
        wasFound = true;
        return updateUser;
      }
      return user;
    });
    if (state.length < 10 && !wasFound) state.users.push(updateUser);
  };

export default{
    onUserChanged,

     /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
};