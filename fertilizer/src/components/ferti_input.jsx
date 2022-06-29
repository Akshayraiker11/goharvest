import styled from "styled-components";
export default function input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 6rem;
padding: 1rem;
border: none;
outline: none;
color: #000000;
font-size: 1rem;
font-weight: bold;
margin:12px;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #5D8233;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
  
 
}
&::placeholder {
  color: #06283D;
  font-weight: 100;
  font-size: 1rem;
  justify-content:space-between;
  margin: 2rem 0;
}
`;