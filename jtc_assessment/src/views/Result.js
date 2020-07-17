import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
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
  width: 80%;
  height: 95%;
  background: #ffffff;
  display: inline-block;
  margin: 1%;
`;

const Header = styled.h1`
  text-align: left;
`;

const handleDetele = (e) => {};

export default (props) => {
  const [record, setRecord] = useState([]);
  const loadDefault = () => {
    axios
      .get(
        `https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/GetAllUsers`
      )
      .then((res) => {
        setRecord(res.data);
      });
  };

  loadDefault();

  return (
    <Wrapper>
      <Wrapper2>
        <Header>User List</Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th>phone</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((data, index) => {
              return (
                <tr>
                  {/* <th>{index}</th> */}
                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>{data.password}</th>
                  <th>{data.phone}</th>

                  <th>
                    <Button
                      variant="link"
                      onClick={handleDetele}
                      key={index}
                      value={index}
                    >
                      <IconContext.Provider
                        value={{ color: "#8B0000", size: "30px" }}
                      >
                        {React.createElement(MdDeleteForever)}
                      </IconContext.Provider>
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Wrapper2>
    </Wrapper>
  );
};
