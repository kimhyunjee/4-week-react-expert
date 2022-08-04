//List.jsx

import React from "react";
import styled from "styled-components";


import Todo from "../todo/Todo"
import { useSelector } from "react-redux";

const List = (props)=> {

  // const initialState =  [
  //   { 
  //   id:1, 
  //   titleText:"리액트 공부하기" , 
  //   commentText:"리액트 어렵다" , 
  //   inDone: false, 
  //   },
  //   {
  //   id:2,
  //   titleText: "리액트에서 중요한것",
  //   commentText: "값을 가져오는 것과 함수명/변수명 잘짓기",
  //   isDone: false,
  //   }
  // ];
  // console.log(props.todo);

  
  const todos = useSelector((state) => state.todos.todos );
  // console.log(todos);
  // const isDoneType = [false,true];




    return (
        <ListContainer>
          <ListTitle>
            <h2>Working.. 🔥</h2>
          </ListTitle>
        <ListWrapper>
          {todos.map((todo) => {
            if ( todo.isDone === false) {
              return (
                <Todo key={todo.id} todo={todo} >

                </Todo>
                )
            };
          })}
        </ListWrapper>

          <ListTitle>
            <h2 className="list-title">Done..! 🎉</h2>
          </ListTitle>
        <ListWrapper>
          {todos.map((todo) => {
                  if (todo.isDone === true) {
                    return (
                      <Todo key={todo.id} todo={todo}>

                      </Todo>
                    );
                  }else {
                    return null;
                  }
                })}
        </ListWrapper>
      </ListContainer>
    );
};

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListTitle = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;


export default List;