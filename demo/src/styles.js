import { Link, styled } from "../../src";

const height = "2.5em";

export const App = styled("div")`
  padding: 1em;
  padding-top: 4em;
  font-family: Roboto, sans-serif;
`;

export const Header = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: indigo;
  color: white;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  min-height: 64px;
  align-items: center;
  @media (max-width: 768px) {
    background: pink;
  }
  @media (max-width: 320px) {
    background: red;
  }
`;

export const HeaderLink = styled(Link)`
  color: inherit;
  padding: 1em;
`;

export const Fieldset = styled("fieldset")`
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 2px;
`;

export const Input = styled("input")`
  display: block;
  height: ${height};
  font-size: inherit;
  padding: 0 0.5em;
  margin-bottom: 1em;
  width: 100%;
`;

export const Button = styled("button")`
  display: block;
  width: 100%;
  height: ${height};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: inherit;
  line-height: 1em;
  border: 0;
  background: indigo;
  color: white;
  border-radius: 2px;
  letter-spacing: 2px;
`;
