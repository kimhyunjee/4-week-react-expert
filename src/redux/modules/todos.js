//redux.modules.todos.js

// Actions type을 정해주는곳
const ADDTODO = "todo/ADDTODO";
const DELETETODO = "todo/DELETETODO";
// const LOAD = "todo/LOAD";
const TOGGLETODO = "todo/TOGGLETODO";


//initial state 초기값
const initialState = {
    todos : [
    { 
    id:1, 
    title:"리액트 공부하기" , 
    comment:"리액트 어렵다" , 
    isDone: false, 
    },
    {
    id:2,
    title: "리액트에서 중요한것",
    comment: "값을 가져오는 것과 함수명/변수명 잘짓기",
    isDone: true,
    },
],
};




// Action Creators 액션타입에 대한 함수 생성
export const addTodo = (todo) => {
    // console.log(todo);
    return { type:ADDTODO, todo };
}
export const deleteTodo = (todo_id) => {
    return {type: DELETETODO, todo_id};
}
// export const LOAD (todo_list) => {
//     return {type: LOAD, todo_list};
// }
export const toggleTodo = (todo_id) => {
    return {type: TOGGLETODO, todo_id};
}


// Reducer 모듈파일에서는 리듀서를 export default한다
export default function reducer(state = initialState, action ) {
    //파라미터 = 이거는 state에 아무 값이 오지 않아도 기본값을 가지고있어란뜻
    switch(action.type){
        case "todo/ADDTODO" : {
            const new_todo = [...state.todos, action.todo];
            return {...state, todos:new_todo};
        }
        case "todo/DELETETODO": {
        const new_todo = state.todos.filter((todo) => {
            return action.todo_id !== todo.id;
        });
        return {...state,todos:new_todo};
        }
        case "todo/TOGGLETODO" : {
            const new_todo = state.todos.map((todo) => {
                if (action.todo_id === todo.id) {
                    todo.isDone = !todo.isDone
                }
                return todo
            });
            return {...state, todos:new_todo};
            }

        default: return state;
    };
};



