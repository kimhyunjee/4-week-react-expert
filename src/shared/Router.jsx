//src.shared.Router.jsx

import React from "react";
//router 로 pages n개 임포트해오기
import { Routes, Route } from "react-router-dom";
import DetailPage from '../pages/DetailPage'
import NotFound from '../pages/NotFound';
import TodoList from '../pages/TodoList';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/Detail/:id" element={<DetailPage />} />
            <Route path="/Not" element={<NotFound />} />
        </Routes>
    );
};


export default Router;
