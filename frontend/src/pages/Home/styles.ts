import styled from "styled-components";

import Background from "../../assets/home-background.svg";

export const Container = styled.div`
  height: 100vh;

  background: url(${Background}) no-repeat 700px bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin: 48px 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 18px;
      color: ${(props) => props.theme.colors.titlesColor.color};
      display: flex;
      align-items: center;

      span {
        margin-right: 20px;
        color: var(--primary-color);
        font-size: 25px;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    header {
      margin: 48px auto 0;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.titlesColor.color};
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
    color: ${(props) => props.theme.colors.body.color};
  }

  button {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    border: 0;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
      font-size: 17px;
    }

    &:hover {
      background: #2fb86e;
    }
  }

  @media (max-width: 900px) {
    align-items: center;

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 24px;
    }
  }
`;
