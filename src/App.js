import React from 'react';
import styled from "styled-components";
import Flex from "./Components/Flex";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Display from "./Components/Display";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const App = () => {

    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title>Калькулятор на React</Title>
            </Flex>
            <Flex><Display type='text'/></Flex>
            <Flex>
                <Button>/</Button>
                <Button>*</Button>
                <Button>-</Button>
            </Flex>
            <Flex>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
            </Flex>
            <Flex>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
            </Flex>
            <Flex>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </Flex>
            <Flex>
                <Button>0</Button>
                <Button>.</Button>
                <Button>=</Button>
            </Flex>
            <Flex><Button>+</Button></Flex>
        </AppWrapper>
    );
};

export default App;