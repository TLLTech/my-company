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
    margin-bottom: 120px;

    img {
      width: 500px;
      height: 250px;
    }

    .cel {
      width: 500px;
      height: 250px;
      border-radius: 50%;
      margin-top: 100px;
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
