import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <table className="userList">
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Website</td>
          <td>Email</td>
          <td>Phone</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {!users.length ? (
          <tr colSpan="5">Loading...</tr>
        ) : (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.username} {user.name}
              </td>
              <td>{user.website}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>See</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserList;
