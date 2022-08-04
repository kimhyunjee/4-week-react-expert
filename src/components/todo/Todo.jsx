//Todo.jsx

import React from "react";
import styled from "styled-components";

import List from "../list/List";
import { useDispatch } from "react-redux";
import { deleteTodo , toggleTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";





// const deleteButton = (id) => {
//   dispatch(todos.deleteTodo(id));
// };

// const completeButton = (id) => {
//   dispatch(todos.completeTodo(id));
// };


function Todo(props) {
    // console.log(props);콘솔 잘.. 찍어보자
    const dispatch = useDispatch();

    const deleteButton = () => {
        dispatch(deleteTodo(props.todo.id));
        // console.log(deleteTodo(props.todo.id)); //액션타입함수에 id값을 넘겨줌
    };
    const toggleButton = () => {
        dispatch(toggleTodo(props.todo.id));
        console.log(toggleTodo(props.todo.id));
    };


    
    return (
        <TodoContainer >
            {/* onClick={() => modify(todo.id)} todocontainer안에 */}
            <Link to= {`/Detail/${props.todo.id}`}> 상세보기 </Link>
                <h2>{props.todo.title}</h2>
                {/* function Todo 아래에 콘솔 찍어서 확인 */}
                <p>{props.todo.comment}</p>
            <ButtonGroup>
                <DeleteButton onClick={deleteButton}>
                    삭제하기
                </DeleteButton>
                <CompleteButton onClick={toggleButton}>
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

