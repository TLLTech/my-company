import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-left: 150px;
    max-width: 1024px;
    display: flex;
    flex-direction: row;

    h1 {
      color: rgba(196, 196, 196, 0.9);
      font-size: 24px;
      font-weight: bold;

      strong {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 15px;
  margin-top: 50px;
`;

export const ContentList = styled.li`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 190px;
  border-radius: 5px;
  border-top: 1px solid rgba(196, 196, 196, 0.9);
  border-left: 1px solid rgba(196, 196, 196, 0.9);
  border-right: 1px solid rgba(196, 196, 196, 0.9);
  border-bottom: 1px solid rgba(196, 196, 196, 0.9);

  h3 {
    color: rgba(196, 196, 196, 0.9);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  > div {
    display: flex;

    img {
      margin-left: 10px;
      margin-bottom: 10px;
      width: 20%;
      height: 100%;
    }

    p {
      margin-left: 10px;
      color: rgba(196, 196, 196, 0.9);
      font-size: 14px;
      font-weight: bold;
    }
  }

  button {
    height: 50px;
    background: rgba(0, 0, 0, 0.9);
    border: 0;
    color: rgba(196, 196, 196, 0.9);
    border-radius: 5px;
    width: 150px;
    margin-bottom: 10px;
    margin-left: 80px;
    font-weight: bold;

    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;
