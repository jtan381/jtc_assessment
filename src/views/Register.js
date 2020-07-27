import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdBook } from "react-icons/md";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  background: #8B0000;
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

    return String(md5(currentPassword))
  };
  

  const handleSubmit = (e) => {
    const hashkey = md5Encrypt(currentPassword);

    const sendInfor = {
      Id: 0,
      name: currentName,
      email: currentEmail,
      password: hashkey,
      phone: currentPhone,
    };
    console.log(sendInfor);
    const stringified = JSON.stringify(sendInfor);
    // var stringified = JSON.stringify(data);
    var parsedObj = JSON.parse(stringified);
    
    axios
      .post(
        "https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/AddUpdateUser",
        parsedObj
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

        <IconContext.Provider value={{ color: "#8B0000", size: "200px" }}>
          {React.createElement(MdBook)}
        </IconContext.Provider>

        <Form onSubmit={handleSubmit} onChange={handleChange}>
          <Wrapper3>
            <Form.Group controlId="name">
              <Form.Control type="input" placeholder="name*" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
          
            <Form.Group controlId="phone">
              <Form.Control type="phone" placeholder="phone" />
            </Form.Group>
    
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="password*" required />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Wrapper3>
        </Form>
        
        <p>
          Aready Registed?
          <a href="http://localhost:3000/">Sign in!</a>
        </p>
     
      </Wrapper2>
    </Wrapper>
  );
};
