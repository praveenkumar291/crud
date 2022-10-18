import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GloablContext } from "../context/GlobalState";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(GloablContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem className="d-flex justify-content-between">
          <strong>{user.name}</strong>
          <div className="ml-4">
            <Link to={`edit/${user.id}`} className="btn btn-warning ml-4">
              Edit{" "}
            </Link>
            <Button onClick={() => removeUser(user.id)} color="danger">
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserList;
