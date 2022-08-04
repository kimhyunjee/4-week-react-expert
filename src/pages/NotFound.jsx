//NotFound.jsx

import React from "react";
// import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom"

function NotFound() {
    const params = useParams();
    console.log(params);
    const navigate = useNavigate();


    return (
        <div>
            <h1> 잘못된 주소입니다 ! </h1>
            <button onClick={() => {
                navigate("/");
            }}> 이전으로 </button>

        </div>

    );
};

export default NotFound;