import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex justify-content-between">
        <strong>User One</strong>
        <div className="ml-4">
          <Link to="/edit/1" className="btn btn-warning ml-4">
            Edit{" "}
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;
