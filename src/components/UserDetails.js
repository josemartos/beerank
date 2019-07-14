import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const UserDetails = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + props.id)
      .then(response => response.json())
      .then(user => setUser(user));
  }, []);

  return (
    <div className="userDetails">
      <div className="userDetails_image">
        <img src="https://i.pravatar.cc/300" alt={user.name} />
      </div>
      <div className="userDetails_info">
        {!user.name ? (
          <Spinner />
        ) : (
          <div>
            <h2>
              {user.username} {user.name}
            </h2>
            <p>{user.website}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
