import { setUsers, setLoading, setError } from "../actions/action";

export const fetchAllUsers = () => async (dispatch) => {
  const startData = Date.now();
  dispatch(setLoading(true));

  try {
    const response = await fetch("http://localhost:8888/users");
    const users = await response.json();
    const endData = Date.now();

    const dif = 1000 - (endData - startData);

    const doubleDispatch = () => {
      dispatch(setLoading(false));
      dispatch(setUsers(users));
    };

    if (dif <= 0) {
      doubleDispatch();
    } else {
      setTimeout(() => {
        doubleDispatch();
      }, dif);
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(true));
  }
};
