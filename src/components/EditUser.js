import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GloablContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
const EditUser = (props) => {
  const [selectuser, Setselectuser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GloablContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(users, "props.match");

  useEffect(() => {
    debugger;
    const selectedUser = users.find((user) => user.id === id);
    Setselectuser(selectedUser);
    console.log(selectedUser);
  }, [users, id]);
  const onSubmit = (e) => {
    editUser(selectuser);
    e.preventDefault();
    navigate("/");
  };
  const onChange = (e) => {
    Setselectuser({ ...selectuser, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={selectuser.name}
            placeholder="Enter Name"
            onChange={onChange}
          ></Input>
        </FormGroup>
        <Button type="submit" className="mr-2">
          Edit Name
        </Button>
        <Link to="/" className="btn btn-danger" style={{ marginLeft: "4px" }}>
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
