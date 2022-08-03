import React from "react";
import styled from "styled-components";


const Form = styled.form`
    background-color: #f9f6e3;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
`
// const input = styled.form`
//     align-items: center;
//     display: flex;
//     gap: 20px;
// `
const Label = styled.form`
    font-size: 16px;
    font-weight: 700;
`

const AddButton = () => {
    return (

        <Form >
            <div className="input-group">
            <label>제목</label>
            <input className="add-input input-body"></input>
            <label>내용</label>
            <input className="add-input input-body"></input>
            </div>
            <button className= "add-button" onClick={AddButton} > 추가하기 </button>
        </Form>

    
    )
};




  
// .add-form, .input-group {
//     align-items: center;
//     display: flex;
//     gap: 20px;
//   }
  
//   .add-button {
//     background-color: #8455c5;
//     border: none;
//     border-radius: 10px;
//     color: #fff;
//     font-weight: 700;
//     height: 40px;
//     width: 140px;
//   }
  


  
// .add-input {
//   border: none;
//   border-radius: 12px;
//   height: 40px;
//   padding: 0 12px;
//   width: 240px;
// }


export default AddButton