import React from 'react';
import styled from "styled-components";

const StyledBottomButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 150px;
  padding: 10px;
  color: #fff;
  background-color: #ec8181;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  &:hover{
    background-color:#ccc;
    transition: 0.4s linear;
  }
`

const BottomButton = (props) => {
    return (
        <StyledBottomButton {...props}/>
    );
};

export default BottomButton;