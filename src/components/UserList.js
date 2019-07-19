import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Spinner from "./Spinner";
import avatarSmall from "../../assets/jpg/avatar-small.jpg";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data: users }) => setUsers(users || []));
  }, []);

  return (
    <ul className="userList">
      <h2 className="pageTitle">Ranking</h2>

      {!users.length ? (
        <li>
          <Spinner />
        </li>
      ) : (
        users.map(user => (
          <li className="userList_item" key={user.id}>
            <Link to={`/userdetails/${user.id}`} title="See details">
              <img src={avatarSmall} alt={user.name} />

              <div>
                <h2 className="userList_item">
                  {user.username} {user.name}
                </h2>
                <p>
                  Often you will use context instead of Redux or another state
                  store. You could get fancy and use useReducer and useContext
                  together to get a pretty great approximation of Redux-like
                  features.
                </p>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default UserList;
