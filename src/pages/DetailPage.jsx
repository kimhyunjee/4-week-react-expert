//DetailPage.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom"

function DetailPage () {
    const params = useParams();
    console.log(params);
    const navigate = useNavigate();



    return (
        <div>
        <div>상세페이지 입니다</div>
        <button onClick={() => { navigate("/"); }}> 이전으로 </button>
        </div>
    );
};

export default DetailPage;