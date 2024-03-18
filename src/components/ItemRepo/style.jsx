import styled from "styled-components";

export const Lista = styled.div`
  margin-top: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  h3{
    font-size: 32px;
    color: #fafafa;
  }
  img {
    width: 100px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    margin-top: 10px;
  }
  p{
    font-size: 32px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
  .show {
    color: #AFC010;
    text-decoration: none;
    padding: 10px;
    display: block;
  }
  .remover {
    color: #ff0000;
    text-decoration: none;
    padding: 10px;

  }
  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  li {
    list-style: none;
  }
`