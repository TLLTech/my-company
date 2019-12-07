import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  > div {
    margin-left: 150px;
    height: 180px;
    max-width: 1024px;
    display: flex;
    flex-direction: row;

    img {
      width: 500px;
      height: 250px;
    }

    div {
      h1 {
        color: rgba(196, 196, 196, 0.9);
        font-size: 28px;
        font-weight: bold;
      }

      h3 {
        color: rgba(196, 196, 196, 0.6);
        font-weight: bold;
        font-size: 24px;
      }

      p {
        color: rgba(196, 196, 196, 0.9);
        font-size: 18px;
        font-weight: bold;

        strong {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;

export const ContantoDiv = styled.div`
  display: flex;

  justify-content: center;

  div {
    width: 100%;
    background: #1d1b1b;
    margin-left: 150px;
    margin-top: 120px;
    height: 200px;
    border-radius: 20px;

    h1 {
      color: rgba(196, 196, 196, 0.9);
      text-align: center;
    }

    p {
      text-align: center;
    }

    button {
      height: 50px;
      background: rgba(0, 0, 0, 0.9);
      border: 0;
      color: rgba(196, 196, 196, 0.9);
      border-radius: 5px;
      width: 180px;

      margin-left: 350px;
      font-weight: bold;
    }
  }
`;
