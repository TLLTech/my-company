import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 920px;

  button {
    border: 0;
    background: transparent;
  }

  > h1 {
    text-align: center;
    color: rgba(196, 196, 196, 0.9);
    font-weight: bold;
    font-size: 28px;
  }

  > div {
    display: flex;
    flex: 1;
    img {
      width: 500px;
      height: 250px;
    }

    .web {
      height: 250px;
      width: 100%;
      margin-left: 10px;
      border-radius: 5px;
    }

    p {
      color: rgba(196, 196, 196, 0.9);
      font-size: 18px;
      font-weight: bold;
      margin-left: 10px;

      div {
        display: flex;
        margin-top: 20px;
        justify-content: center;

        .apple {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(34, 38, 36, 0.4);
          height: 50px;
          width: 180px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
        }

        .play {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(53, 175, 109, 0.4);
          height: 50px;
          width: 180px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          margin-left: 10px;
        }
      }
    }
  }
`;
