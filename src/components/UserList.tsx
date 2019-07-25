import React, { useState, useEffect, FunctionComponent } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import axios from "axios";
import Spinner from "./Spinner";
import { IUser } from "../interfaces";
import avatarSmall from "/assets/jpg/avatar-small.jpg";

const UserList: FunctionComponent<RouteComponentProps> = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data: userList }) => {
        setUsers(userList || []);
      });
  }, []);

  return (
    <div className="userList">
      <h2 className="pageTitle">Ranking</h2>
      <ul data-testid="user-list">
        {!users.length ? (
          <li>
            <Spinner />
          </li>
        ) : (
          users.map((user: IUser) => (
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
    </div>
  );
};

export default UserList;
