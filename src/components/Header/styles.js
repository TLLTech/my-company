import styled from "styled-components";

export const Container = styled.header`
  height: 90px;
  max-width: 1024%;

  background: #1d1b1b;

  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 18px;
    margin-left: 80px;
    padding: 15px;
    border-right: 2px solid #eee;
  }

  nav {
    margin-left: 30px;
    color: #fff;
    font-weight: bold;

    display: flex;

    a {
      font-size: 16px;
      color: #fff;
      border-bottom: 3px solid #eee;
      padding-bottom: 5px;
      margin-right: 30px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-left: 350px;

    li {
      margin-left: 10px;
    }
  }
`;
