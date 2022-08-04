//src.pages.TodoList.jsx

import React from "react";

//컴포넌트들 임포트해옴
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";


function TodoList() {
    return (
        <div className="App">
            <Layout>
                <Header />
                <Form />
                <List />
            </Layout>
        </div>

    );
};

export default TodoList;