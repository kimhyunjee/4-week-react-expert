import React from "react";

function List () {
    return (
        <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        {/* <div className="list-wrapper">

              {todos.map((todo) => {
                  return todo.isDone===false ? (
                    <Todo 
                    todo={todo}
                    setTodos={setTodos}
                    deleteButton={deleteButton}
                    completeButton={completeButton}
                    key={todo.id}
                    modify={modify}
                    />
                    ) :null;
              })}
        </div> */}

        <h2 className="list-title">Done..! 🎉</h2>
        {/* <div className="list-wrapper">
          {todos.map((todo) => {
                  if (todo.isDone === true) {
                    return (
                      <Todo 
                      todo={todo}
                      setTodos={setTodos}
                      deleteButton={deleteButton}
                      completeButton={completeButton}
                      />
                    );
                  }else {
                    return null;
                  }
                })}
        </div> */}
      </div>
    )

};

export default List;