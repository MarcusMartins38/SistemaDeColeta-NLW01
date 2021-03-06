import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid transparent;

  background-color: ${(props) => props.theme.colors.header.background};

  header {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: ${(props) => props.theme.colors.titlesColor.color};
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`;

export const Card = styled.div`
  max-width: 300px;
  height: 600px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.header.border};

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

  h2 {
    font-size: 24px;
    color: var(--primary-color);
    font-weight: bold;
    margin-left: 10px;
    text-decoration: underline;
  }
`;

export const Items = styled.div`
  margin-left: 10px;
  font-weight: bold;
  color: #2aa260;
  text-decoration: none;
`;

export const Address = styled.div`
  margin-top: 15px;

  p {
    color: var(--primary-color);
    margin: 5px 0;
    margin-left: 10px;
    font-size: 16px;
    text-decoration: none;
  }
`;
