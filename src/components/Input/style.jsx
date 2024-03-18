import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 60%;

  margin-top: 20px;
  input {
    background: transparent;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    outline: none;
    border: none;
    font-family: 700;
    color: #ffffff;
    text-align: center;
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .button button {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fafafa;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #000000;
    transition: 1s;
  }
  .button button:hover {
    opacity: 0.5;
  }
`