import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;

  h1 {
    text-align: center;
    color: rgba(196, 196, 196, 0.9);
    font-weight: bold;
    font-size: 28px;
  }

  > div {
    margin-left: 150px;
    /* height: 180px; */
    max-width: 1024px;
    display: flex;

    img {
      width: 35%;
      height: 200px;
      border-radius: 20px;
      margin-top: 50px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      input {
        width: 400px;
        margin-top: 10px;
        border: 0px;
        background: rgba(196, 196, 196, 0.2);
        height: 40px;
        border-radius: 5px;
        padding-left: 10px;
      }

      textarea {
        width: 400px;
        height: 100px;
        margin-top: 10px;
        border: 0px;
        background: rgba(196, 196, 196, 0.2);
        border-radius: 5px;
        padding-left: 10px;
        padding-top: 10px;
      }

      button {
        height: 40px;
        background: rgba(0, 0, 0, 0.9);
        border: 0;
        color: rgba(196, 196, 196, 0.9);
        border-radius: 5px;
        width: 150px;

        margin-top: 20px;
        margin-left: 130px;
        font-weight: bold;
      }
    }
  }
`;
