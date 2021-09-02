import { setUsers } from "./action";

export const fetchAllUsers = () => async (dispatch) => {
  const response = await fetch("http://localhost:8888/users");
  const users = await response.json();

  dispatch(setUsers(users));
};
