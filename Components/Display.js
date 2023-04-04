import React from 'react';
import styled from "styled-components";

const DisplayWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border:  2px solid black;
  font-size: 24px;
`

const StyledDisplay = styled.input`
  width: 100%;
  font-size: 32px;
  padding: 5px;
  text-align: right;
  background-color: #fff;
  border: none;
  margin-bottom: 10px;
  cursor: auto;
  &:focus {
    outline: none;
  }
`

const Display = ({value}) => {
    return (
        <DisplayWrapper>
            <StyledDisplay type='text' value={value}/>
        </DisplayWrapper>
    );
};

export default Display;