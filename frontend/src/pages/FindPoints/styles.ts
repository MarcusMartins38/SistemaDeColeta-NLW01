import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid transparent;

  background-color: #dbfbed;

  header {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: var(--title-color);
      font-weight: bold;
      text-decoration: none;

      display: flex;
      align-items: center;
      svg {
        margin-right: 16px;
        color: var(--primary-color);
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Card = styled.div`
  max-width: 300px;
  height: 500px;
  border-radius: 10px;
  border: 2px solid black;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 40%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h1 {
    margin-left: 10px;
    margin-bottom: 25px;
  }

  p {
    font-size: 18px;
    color: var(--primary-color);
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const Items = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

export const Address = styled.div`
  margin-top: 15px;

  p {
    margin: 5px 0;
    margin-left: 10px;
  }
`;
