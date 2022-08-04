//redux.modules.todos.js


import { useDispatch } from "react-redux";

// Actions type을 정해주는곳
const ADD = "todo/ADD";
// const DELETE = "TODO/DELETE";
// const LOAD = "todo/LOAD";
// const TOGGLE = "todo/TOGGLE";


//initial state 초기값
const initialState = {todos : [
    { 
    id:1, 
    titleText:"리액트 공부하기" , 
    commentText:"리액트 어렵다" , 
    inDone: false, 
    },
    {
    id:2,
    titleText: "리액트에서 중요한것",
    commentText: "값을 가져오는 것과 함수명/변수명 잘짓기",
    isDone: false,
    },
],todo:{}
};




// Action Creators 액션타입에 대한 함수 생성
export const addTodo = (todo) => {
    return {type:ADD, todo };
}
// export const deleteTodo (todo_id) => {
//     return {type: DELETE, todo_di};
// }
// export const LOAD (todo_list) => {
//     return {type: LOAD, todo_list};
// }
// export const toggleTodo (todo_id) => {
//     return {type: DELETE, todo_di};
// }


// Reducer 모듈파일에서는 리듀서를 export default한다
export default function reducer(state = initialState, action ) {
    //파라미터 = 이거는 state에 아무 값이 오지 않아도 기본값을 가지고있어란뜻
    switch(action.type){
        case "todo/ADD" : {
            const new_todo = [...state.todos, action.todo];
            return {...state, todos:new_todo};
        }
        // case "todo/DELETE":
        // const new_todo = state.todos.filter((todo) => {
        //     return action.todo_id !== todo.id;
        // });
        // return {...state,todos:new_todo};
        //return {list:state.list.filter(todo => todo.id !== action.deleteId)}

        default: return state;
    };
};



