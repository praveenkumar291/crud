import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GloablContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const [name, SetName] = useState("");
  const { addUser } = useContext(GloablContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    e.preventDefault();
    navigate("/");
  };
  const onChange = (e) => {
    SetName(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={onChange}
            placeholder="Enter Name"
          ></Input>
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
