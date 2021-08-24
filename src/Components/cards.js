import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://c.tenor.com/JwPW0tw69vAAAAAi/cargando-loading.gif"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div>
      <div className="container" id="main">
        <div className="row">
          {users.map((user) => (
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="cards">
                <div className="imgBx">
                  <img src={user.avatar} alt={user.avatar}></img>
                </div>
                <div className="content">
                  <div className="details">
                    <p className="user-id">ID: {user.id}</p>
                    <h2 className="user-name">
                      {user.first_name} {user.last_name}
                    </h2>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
