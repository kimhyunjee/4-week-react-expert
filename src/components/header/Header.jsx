import React from "react";
import styled from "styled-components";

const Header = () => {
    return (

        <Container>
            <div>MT Todo List</div>
            <div>React-2-week</div>
        </Container>

    );
};

const Container = styled.div`
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #d7d1e9;
`;

export default Header;