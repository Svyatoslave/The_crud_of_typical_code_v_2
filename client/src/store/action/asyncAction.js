import { setUsers } from "./action";

export const fetchAllUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)));
  };
};
