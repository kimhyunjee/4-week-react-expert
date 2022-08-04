//src.layout.Layout.jsx

import React from "react";
import styled from 'styled-components';

const Layout = (props) => {
    return <LayoutBox>{props.children}</LayoutBox>

};

const LayoutBox = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 100vh;
    /* background-color: green; */

    margin: 0 auto;
`;

export default Layout;



