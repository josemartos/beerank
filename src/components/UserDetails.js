import React, { useState, useEffect } from "react";

const UserDetails = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + props.id)
      .then(response => response.json())
      .then(users => setUser(users));
  }, []);

  return (
    <div>
      {user.username} {user.name}
      <img src="https://i.pravatar.cc/300" alt={user.name} />
    </div>
  );
};

export default UserDetails;
