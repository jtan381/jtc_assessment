import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdBook } from "react-icons/md";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  background: #D3D3D3;
  min-height: 100vh;
  display: flex;  
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled.div`
  width: 30%;
  height: 100%;
  background: #ffffff;
  border-radius: 3%;

  display: grid; 
  grid-template-rows: auto;
  grid-template-columns: auto ;
  grid-gap: 1%;
  justify-items: center;
`;

const Wrapper3 = styled.div`
  display: grid; 
  justify-items: center;
`;

const Button1 = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;

  font-family: arial, sans-serif;

  color: #069;
  text-decoration: underline;
  cursor: pointer;
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

  const handleRegister = (e)=>{
    history.push("/Register");
  }

  return (
    <Wrapper>
      <Wrapper2>

        <IconContext.Provider value={{ color: "#D3D3D3", size: "200px" }}>
          {React.createElement(MdBook)}
        </IconContext.Provider>

        <Form onSubmit={handleSubmit} onChange={handleChange}>
          <Wrapper3>
            <Form.Group controlId="name">
              <Form.Control type="input" placeholder="name" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Wrapper3>
        </Form>
        <p>
          Not Registed?
          <Button1 onClick={handleRegister}>Create an account!</Button1>
        </p>

      </Wrapper2>
    </Wrapper>
  );
};
