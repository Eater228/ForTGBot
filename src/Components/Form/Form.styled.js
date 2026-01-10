import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  margin: 10px 5%;
  padding: 15px 10px;
  font-size: 14px;
  border: 2px solid silver;
  border-radius: 5px;

  &:focus {
    border-color: #db5d5d;
  }
`;

