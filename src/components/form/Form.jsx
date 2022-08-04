//Form.jsx

import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { nanoid } from "nanoid"


// const Label = styled.form`
//     font-size: 16px;
//     font-weight: 700;
// `


function Form() {

    const dispatch = useDispatch();
    const title = React.useRef(null);
    const comment = React.useRef(null);


    const addButton = (event) => {
        event.preventDefault();
        if (title.current.value === "" || comment.current.value ==="" ) return;
        dispatch(addTodo({
            id:nanoid(),
            title: title.current.value,
            comment:comment.current.value,
            isDone:false,
        }),
        (title.current.value = ""),
        (comment.current.value = ""),
        );
    };

        return (
            <FormContainer >
                <InputGroup>
                <div>
                <label>제목</label>
                <Input type="text" ref={title}></Input>
                <label>내용</label>
                <Input type="text" ref={comment}></Input>
                </div>
                <div>
                <Button onClick={addButton} > 추가하기 </Button>
                </div>
                </InputGroup>
    
            </FormContainer>
        );
};



// & 자기자신 아래에 있는 모든 태그에 적용
// & > 자기자신 바로 아래에 있는 태그에만 적용

const FormContainer = styled.form`
    background-color: #f9f6e3;
    border-radius: 12px;
    /* justify-content: space-between; */
    margin: 0 auto;
    padding: 30px;
`
const InputGroup = styled.div`
    justify-content: space-between;
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


export default Form;