import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
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
  width: 80%;
  height: 95%;
  background: #ffffff;
  padding: 1%;

  display: grid; 
  grid-template-rows: auto;
  grid-template-columns: auto ;
`;

const Header = styled.h1`
  text-align: left;
`;

export default (props) => {
  const history = useHistory();
  const [record, setRecord] = useState([]);

  useEffect(()=>{
      const fetchData = async () => {
      const result = await axios.get(
        'https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/GetAllUsers',
      );
      setRecord(result.data);
    };

    fetchData();
  },[]);

  const handleDetele = (id, record, setRecord) => {
    axios
    .get(
      `https://peter-htet.outsystemscloud.com/ITDInterviews/rest/Users/DeleteUser?id=` +
      id
    )
    .then((res) => {
      console.log(res);
      const status = res.data.IsSuccess;
      console.log(status);
      if (status === true) {
        // redicrect to main page
        console.log("refresh")
        history.go();
      }
    });
  };

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
            {record.map((data) => {
              return (
                <tr key={data.Id}>
                  {/* <th>{index}</th> */}
                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>{data.password}</th>
                  <th>{data.phone}</th>

                  <th>
                    <Button
                      variant="link"
                      key={data.Id}
                      onClick={() => handleDetele(data.Id, record, setRecord)}
                      value={data.Id}
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
