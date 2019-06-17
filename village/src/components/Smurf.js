import React from "react";
import styled from "styled-components";

const SmurfCard = styled.div`
  display: flex;
  flex-direction:column
  align-items:center;
  background: white;

  margin:10px 0px;
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
