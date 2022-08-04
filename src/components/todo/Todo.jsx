//Todo.jsx

import React from "react";
import styled from "styled-components";

import List from "../list/List";
import { useDispatch } from "react-redux";


// const dispatch = useDispatch();

// const deleteButton = (id) => {
//   dispatch(todos.deleteTodo(id));

// };

// const completeButton = (id) => {
//   dispatch(todos.completeTodo(id));
// };


function Todo(props) {
    
    return (
            <TodoContainer >
            {/* onClick={() => modify(todo.id)} todocontainer안에 */}
                <div>
                    <h2>{props.titleText}</h2>
                    <div>{props.commentText}</div>
                </div>
                <ButtonGroup>
                    <DeleteButton>
                        {/* // onClick={() => deleteButton(todo.id)} */}
                        삭제하기
                    </DeleteButton>
                    <CompleteButton>
                        {/* onClick={() => completeButton(todo.id)} */}
                        {props.todo.isDone ? "취소하기" : "완료하기"}
                    </CompleteButton>
                </ButtonGroup>
            </TodoContainer>
    );
};


const TodoContainer = styled.div`
    border: 4px solid #8455c5;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
    
`;

const DeleteButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;

    background-color: #fff;
    border: 2px solid red;
`;

// const DeleteButton = styled.button`
//   display: flex;
//   gap: 10px;
//   margin-top: 24px;

//   background-color: #fff;
//   border: 2px solid red;
// `;

const CompleteButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;

    background-color: #fff;
    border: 2px solid green;
`;


export default Todo;

