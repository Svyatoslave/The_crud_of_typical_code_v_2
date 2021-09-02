import React from "react";

const FullUserModal = ({ active, setActive, user }) => {
  const address = user.address;
  const geo = address.geo;
  const company = user.company;
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="container ">
        <div className="modal-body " onClick={(e) => e.stopPropagation()}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">E-mail: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Website: {user.website}</p>
          <div ClassName="modal-body">
            <h5 className="card-title  ">Address: </h5>
            <p className="card-text  ">Street: {address.street}</p>
            <p className="card-text  ">Suite: {address.suite}</p>
            <p className="card-text  ">City: {address.city}</p>
            <p className="card-text ">Zipcode: {address.zipcode}</p>
            <div>
              <h6 className="card-title   ">Geo: </h6>
              <p className="card-text "> Street: {geo.lat}</p>
              <p className="card-text ">Suite: {geo.lng}</p>
            </div>
          </div>

          <div>
            <h5 className="card-title  ">Company: </h5>
            <p className="card-text ">Name: {company.name}</p>
            <p className="card-text ">CatchPhrase: {company.catchPhrase}</p>
            <p className="card-text ">Bs: {company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullUserModal;
