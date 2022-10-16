import React from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddUser = () => {
  return (
    <div>
      <Form>
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
