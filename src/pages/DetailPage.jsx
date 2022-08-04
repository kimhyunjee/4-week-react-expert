//DetailPage.jsx

import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const DetailPage = () => {
    const params = useParams();
    // console.log(params.id); // /주소/: 뒤의 값을 가져옴
    const navigate = useNavigate();

    const {todos} = useSelector((state)=> state.todos);
    // console.log(todo);
    // const new_todo = todo.map((todo) => {
    //     if (todo.id === params.id) {
    //         return todo
    //     }
    //     console.log(new_todo);
    //     return {...state, todos:new_todo}
    // });
    console.log(todos.todo);




    return (
        <div>
            <Box> 
                <p>id: {params.id}</p>
                <div>상세페이지 입니다</div>
                {todos.map((todo) => {
                    if (todo.id === params.id) {
                        // console.log(todo.id);
                        return (
                            <div key={todo.id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.comment}</p>
                            </div>
                        );
                    };
                    return null;
                })}

                <button onClick={() => { navigate("/"); }}> 이전으로 </button>
            </Box>
        </div>
    );
};


const Box = styled.div`
    border: 4px solid #8455c5;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    /* 원래 가로정렬인데 column은 반대속성을 줘서 세로정렬됨 */
`;

export default DetailPage;