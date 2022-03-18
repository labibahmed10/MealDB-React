import React, { useEffect, useState } from "react";

const Posts = () => {
  const [name, getUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => getUser(data));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading User</h1>

      {name.map((user) => {
        return (
          <div>
            <h3>{user.title}</h3>;<p>{user.body} </p>;
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
