import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import avatarLarge from "../../assets/jpg/avatar-large.jpg";

const UserDetails = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
      .then(({ data: user }) => setUser(user || []));
  }, []);

  return (
    <div className="userDetails">
      <h2 className="pageTitle">Detail page</h2>

      <div className="userDetails_content">
        <div className="userDetails_avatar">
          <img src={avatarLarge} alt={user.name} />
        </div>
        <div className="userDetails_info">
          {!user.name ? (
            <Spinner />
          ) : (
            <div>
              <h3 className="userDetails_title">
                {user.username} {user.name}
              </h3>
              <p>{user.website}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
