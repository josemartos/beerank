import React, { useState, useEffect, FunctionComponent } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import axios from "axios";
import Spinner from "./Spinner";
import { UserInfo } from "../interfaces";
import avatarLarge from "../../assets/jpg/avatar-large.jpg";

interface Props {
  userId: string;
}

const UserDetails: FunctionComponent<RouteComponentProps<Props>> = props => {
  const [user, setUser] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
      return;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
      .then(({ data: userInfo }) => {
        setUser(userInfo || {});
      });
  }, []);

  return (
    <div className="userDetails">
      <h2 className="pageTitle">Detail page</h2>
      {user ? (
        <div className="userDetails_content">
          <div className="userDetails_avatar">
            <img src={avatarLarge} alt={user.name} />
          </div>
          <div className="userDetails_info">
            <div>
              <h3 className="userDetails_title">
                {user.username} {user.name}
              </h3>
              <p>{user.website}</p>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default UserDetails;