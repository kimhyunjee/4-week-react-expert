//Form.jsx

import React from "react";
import styled from "styled-components";


// const Label = styled.form`
//     font-size: 16px;
//     font-weight: 700;
// `

const AddButton = () => {
    return (

        <FormContainer >
            <InputGroup>
            <label>제목</label>
            <Input type="text"></Input>
            <label>내용</label>
            <Input type="text"></Input>
            <Button onClick={AddButton} > 추가하기 </Button>
            </InputGroup>

        </FormContainer>
    
    );
};

// & 자기자신 아래에 있는 모든 태그에 적용
// & > 자기자신 바로 아래에 있는 태그에만 적용

const FormContainer = styled.form`
    background-color: #f9f6e3;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
`
const InputGroup = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
`

const Input = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`

const Button = styled.button`
    background-color: #8455c5;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`


export default AddButton