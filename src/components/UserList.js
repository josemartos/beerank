import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Spinner from "./Spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <div className="userList_wrapper">
      <table className="userList">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Website</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {!users.length ? (
            <tr colSpan="4">
              <Spinner />
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/userdetails/${user.id}`} title="See details">
                    {user.username} {user.name}
                  </Link>
                </td>
                <td>{user.website}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
