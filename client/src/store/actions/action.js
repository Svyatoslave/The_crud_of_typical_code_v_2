export function setUsers(payload) {
  return {
    type: "SET_USERS",
    payload,
  };
}
export function setLoading(payload) {
  return {
    type: "SET_LOADING",
    payload,
  };
}

export function setError(payload) {
  return {
    type: "SET_ERROR",
    payload,
  };
}
