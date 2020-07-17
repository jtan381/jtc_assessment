import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdBook } from "react-icons/md";
import { Container, Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  text-align: center;
  background: #d3d3d3;
  // padding: 0.25em 1em;
  height: 500px;
`;

const Wrapper2 = styled.div`
  width: 400px;
  height: 95%;
  background: #ffffff;
  border-radius: 25px;
  display: inline-block;
  margin: 1%;
`;

export default (props) => {
  const history = useHistory();
  const [currentName, setCurrentName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    // console.log(target.id);
    if (target.id === "password") {
      console.log(target.value);
      setCurrentPassword(target.value);
    } else {
      console.log(target.value);
      setCurrentName(target.value);
    }
  };

  const handleSubmit = (e) => {
    axios
      .get(
        `https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/GetUser?name=` +
          currentName
      )
      .then((res) => {
        console.log(res);
        const password = res.data.password;
        console.log(password);
        if (password === currentPassword) {
          // redicrect to main page
          history.push("/Result");
        }
      });
    e.preventDefault();

    console.log(e);
    console.log("enter submit");
    // e.preventDefault();

    // setCurrentUser(selectedNric);
    history.push("/");
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Container style={{ width: "300px" }}>
          <IconContext.Provider value={{ color: "#D3D3D3", size: "200px" }}>
            {React.createElement(MdBook)}
          </IconContext.Provider>

          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group controlId="name">
              <Form.Control type="input" placeholder="name" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
          <p>
            Not Registed?
            <a href="http://localhost:3000/Register">Create an account!</a>
          </p>
        </Container>
      </Wrapper2>
    </Wrapper>
  );
};
