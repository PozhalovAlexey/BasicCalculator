import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./Components/Flex";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Display from "./Components/Display";
import BottomButton from "./Components/BottomButton";

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

    const [result, setResult] = useState(0);
    const [inputValue, setInputValue] = useState('')


    const handleInput = (e) => {
        setInputValue(inputValue + e.target.value);
    }


    const handleOperation = (operator) => {
        switch (operator) {
            case '+':
                setResult(parseFloat(result)+parseFloat(inputValue));
                break;
            case'-':
                setResult(parseFloat(result) - parseFloat(inputValue));
                break;
            case'*':
                setResult(parseFloat(result) * parseFloat(inputValue));
                break;
            case'/':
                if (parseFloat(inputValue) === 0) {
                    setResult(`Error : Division by 0`)
                } else setResult(parseFloat(result) / parseFloat(inputValue))
                ;
                break;
            case 'C':
                setResult('0');
                setInputValue('')
                break;
            case '=':
                setResult(parseFloat(result));
                setInputValue(result);
                break
            default:
                break;
        }
        setInputValue('')
    }


    return (
        <>
            <AppWrapper>
                <Flex justify='center'>
                    <Title>Калькулятор на React</Title>
                </Flex>
                <Flex>
                    <Display type='number' value={inputValue || 0} onChange={handleInput}/>
                </Flex>
                <Flex>
                    <Button onClick={() => handleOperation('/')}>/</Button>
                    <Button onClick={() => handleOperation('*')}>*</Button>
                    <Button onClick={() => handleOperation('-')}>-</Button>
                </Flex>
                <Flex>
                    <Button value='7' onClick={handleInput}>7</Button>
                    <Button value='8' onClick={handleInput}>8</Button>
                    <Button value='9' onClick={handleInput}>9</Button>
                </Flex>
                <Flex>
                    <Button value='4' onClick={handleInput}>4</Button>
                    <Button value='5' onClick={handleInput}>5</Button>
                    <Button value='6' onClick={handleInput}>6</Button>
                </Flex>
                <Flex>
                    <Button value='1' onClick={handleInput}>1</Button>
                    <Button value='2' onClick={handleInput}>2</Button>
                    <Button value='3' onClick={handleInput}>3</Button>
                </Flex>
                <Flex>
                    <Button value='0' onClick={handleInput}>0</Button>
                    <Button>.</Button>
                    <Button onClick={() => handleOperation('=')}>=</Button>
                </Flex>
                <Flex>
                    <BottomButton onClick={() => handleOperation('+')}>+</BottomButton>
                    <BottomButton onClick={() => handleOperation('C')}>C</BottomButton>
                </Flex>
            </AppWrapper>
        </>
    );
};

export default App;