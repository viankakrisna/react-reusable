import { Link, styled } from '../../src';

const height = '2.5em';

export const theme = {
  background: {
    primary: 'indigo',
  },
  color: {
    primary: 'white',
  },
};

export const App = styled('div')`
  box-sizing: border-box;
  padding: 1em;
  padding-top: 5em;
  background: #fafafa;
  font-family: Roboto, sans-serif;
  min-height: 100vh;
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
  text-decoration: none;
`;

export const Fieldset = styled('fieldset')`
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 2px;
  box-sizing: border-box;
`;

export const inputStyle = `
display: block;
height: 2.5em;
font-size: inherit;
padding: 0 0.5em;
margin-bottom: 1em;
border: 0;
box-sizing: border-box;
border-bottom: 1px solid #ddd;
width: 100%;
position: relative;
outline: none;

&:before {
  content: attr(placeholder);
  position: absolute;
  top: -0.5em;
}
`;

export const Input = styled('input')(inputStyle);

export const Button = styled('button')`
  display: block;
  width: 100%;
  height: ${height};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: inherit;
  line-height: 1em;
  border: 0;
  background: ${props => theme.background[props.kind] || 'transparent'};
  color: ${props => theme.color[props.kind] || 'inherit'};
  border-radius: 2px;
  letter-spacing: 2px;
  transition: 250ms;
`;

export const Textarea = styled('textarea')(inputStyle);

export const Center = styled('div')`
  text-align: center;
`;

export const Card = styled('div')`
  background: #fff;
  border-radius: 2px;
  position: relative;
  font-family: Roboto, sans-serif;
  padding: 1em;
`;

export const Card1 = styled(Card)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Card1Hover = styled(Card)`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Card2 = styled(Card)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Card3 = styled(Card)`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const Card4 = styled(Card)`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Card5 = styled(Card)`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
