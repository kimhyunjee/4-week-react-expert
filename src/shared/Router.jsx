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
            <Route path="/*" element={<NotFound />} /> 
            {/* 슬래시 뒤에 별표를 붙이면 주소오류가 났을 때 NotFound로 가게 된다 ! */}
        </Routes>
    );
};


export default Router;
