import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  flex: 1;
  width: 8rem;
  font-size: 24px;
  padding: 10px;
  color: #fff;
  background-color: #b41414;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  &:hover,
  &:nth-child(4n),
  &:nth-child(4n-1),
  &:nth-child(4n-2){
    background-color: #ccc;
    transition: 0.4s linear;
  }
  
  &:nth-child(4n) {
    background-color: #0d2a24;
    color: #fff;
  }

  &:nth-child(4n-1) {
    background-color: #091504;
    color: #fff;
  }

  &:nth-child(4n-2) {
    background-color: #243493;
    color: #fff;
  }
  &:nth-child(4n):nth-child(4n-1):nth-child(4n-2):hover{
  color: #ccc;
}
`

const Button = (props) => {
    return (
        <StyledButton {...props}></StyledButton>
    );
};

export default Button;