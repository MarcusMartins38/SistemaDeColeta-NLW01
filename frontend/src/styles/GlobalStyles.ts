import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-color: #34cb79;
  --title-color: #322153;
  --text-color: #6c6c80;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.body.background};
  -webkit-font-smoothing: antialiased;
  color: ${(props) => props.theme.colors.body.color};
}

body,
input,
button {
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${(props) => props.theme.colors.titlesColor.color};
  font-family: Ubuntu;
}

`;
