import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link to="/sun"><Button>Sun</Button></Link>
      <Link to="/mercury"><Button>Mercury</Button></Link>
      <Link to="/venus"><Button>Venus</Button></Link>
      <Link to="/earth"><Button>Earth</Button></Link>
      <Link to="/mars"><Button>Mars</Button></Link>
      <Link to="/jupiter"><Button>Jupiter</Button></Link>
      <Link to="/saturn"><Button>Saturn</Button></Link>
      <Link to="/uranus"><Button>Uranus</Button></Link>
      <Link to="/neptune"><Button>Neptune</Button></Link>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  display:flex;
  align-items:center;
  background:black;
`;

const Button = styled.button`
  padding: 10px 10px;
  margin: 10px 10px;
  background: #0026ff;
  border-radius:10px;
`;
