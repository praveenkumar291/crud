import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GloablContext } from "../context/GlobalState";

const AddUser = () => {
  const { addUser } = useContext(GloablContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit" className="mr-2">
          Submit
        </Button>
        <Link to="/" className="btn btn-danger" style={{ marginLeft: "4px" }}>
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
