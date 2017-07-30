import styled, { injectStyle } from '../../src/styled';
import Link from '../../src/Link';

injectStyle(`* { box-sizing: border-box; }`);

const height = '2.5em';

export const Box = styled('div')`
  padding: 1em;
`;

export const Code = styled('code')`
  padding: 0.314em 0.628em;
  background: rgba(0,0,0,0.1);
  line-height: 1.5em;
  box-sizing: border-box;
`;

export const Pre = styled('pre')`
  padding: 0.314em 0.628em;
  background: rgba(0,0,0,0.1);
  line-height: 1.5em;
  display: block;
  width: 80em;
  max-width: 100%;
  margin: 0.5em 0;
  padding: 1em;
  white-space: pre-wrap;
  box-sizing: border-box;
`;

export const App = styled('div')`
  padding: 1em;
  padding-top: 4em;
  font-family: 'Roboto', sans-serif;
`;

export const Header = styled('div')`
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
  text-transform: uppercase;
  @media (max-width: 320px){
    background: red;
  }
`;

export const HeaderLink = styled(Link)`
  color: inherit;
  padding: 1em;
  text-decoration: none;
  font-weight: ${props => (props.bold ? '900' : 'inherit')};
`;

export const Fieldset = styled('fieldset')`
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 2px;
  box-sizing: border-box;
`;

export const Input = styled('input')`
  display: block;
  height: ${height};
  font-size: inherit;
  padding: 0 0.5em;
  margin-bottom: 1em;
  width: 100%;
`;

export const Button = styled('button')`
  display: block;
  width: 100%;
  height: ${height};
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1em;
  border: 0;
  background: indigo;
  color: white;
  border-radius: 2px;
  letter-spacing: 2px;
  font: inherit;
`;
