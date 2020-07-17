import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdBook } from "react-icons/md";
import { Container, Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  text-align: center;
  background: #8b0000;
  // padding: 0.25em 1em;
  height: 100%;
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
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    // console.log(target.id);
    if (target.id === "password") {
      console.log(target.value);
      setCurrentPassword(target.value);
    } else if (target.id === "name") {
      console.log(target.value);
      setCurrentName(target.value);
    } else if (target.id === "email") {
      console.log(target.value);
      setCurrentEmail(target.value);
    } else {
      console.log(target.value);
      setCurrentPhone(target.value);
    }
  };

  const md5Encrypt = (password) => {
    var md5 = require("md5");
    console.log(md5("password"));
    return md5("password");
  };

  const handleSubmit = (e) => {
    const encrypted_password = md5Encrypt(currentPassword);

    const sendInfor = {
      Id: 0,
      name: currentName,
      email: currentEmail,
      password: encrypted_password,
      phone: currentPhone,
    };
    let obj = JSON.parse(sendInfor);
    console.log(sendInfor);
    axios
      .post(
        "https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/AddUpdateUser",
        obj
      )
      .then((response) => {
        console.log(response);
        history.push("/Result");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Container style={{ width: "300px" }}>
          <IconContext.Provider value={{ color: "#8B0000", size: "200px" }}>
            {React.createElement(MdBook)}
          </IconContext.Provider>

          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group controlId="name">
              <Form.Control type="input" placeholder="name*" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Form.Group controlId="phone">
              <Form.Control type="phone" placeholder="phone" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="password*" required />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <p>
            Aready Registed?
            <a href="http://localhost:3000/">Sign in!</a>
          </p>
        </Container>
      </Wrapper2>
    </Wrapper>
  );
};
