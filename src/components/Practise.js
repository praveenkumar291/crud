import React, { useEffect, useState } from "react";

const Practise = () => {
  const [user, SetUser] = useState([]);

  useEffect(() => {
    console.log("useEffect run");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        SetUser(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {user.map((name, id) => (
        <h1 key={id}>{name.title}</h1>
      ))}
    </div>
  );
};

export default Practise;
