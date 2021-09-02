import React, { useEffect } from "react";

import { fetchAllUsers } from "../store/action/asyncAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };
  useEffect(() => {
    displayAllUsers();
  }, []);

  return (
    <nav className="navbar navbar-light  ">
      <a className="navbar-brand " href="#">
        Users CRUD
      </a>

      <button className="btn btn-primary my-3 mx-3" onClick={displayAllUsers}>
        Refresh
      </button>
    </nav>
  );
};

export default Header;
