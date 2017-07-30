import React from 'react';
import md5 from 'md5';

const STYLED_NAMESPACE = 'styled-namespace';
const e = React.createElement;
const appended = [];

//styled-components wannabe! take a component
export default function styled(Component) {
  //then create tagged template literal for that component
  return function createStyled(css, ...exp) {
    //return a named function, easier to debug in the stack trace
    return function styledComponent(props) {
      const interpolatedCSS = css.raw.reduce(
        createRawCSSReducer(exp, props),
        ''
      );

      //use the component name, else just use styled prefix
      const className = [
        Component.displayName || Component.name || 'styled',
        //generates a unique identifier based on the css string
        md5(interpolatedCSS),
      ].join('_');

      renderStyle(className, interpolatedCSS);

      return e(
        Component,
        Object.assign({}, props, {
          className: [className, props.className].filter(Boolean).join(' '),
        })
      );
    };
  };
}

export function keyframes(css) {
  const interpolated = css.raw.reduce(createRawCSSReducer());
  const hash = ['keyframes', md5(interpolated)].join('_');
  const style = ['@keyframes ', hash, '{', interpolated, '}'].join('');
  renderStyle(hash, style);
  return hash;
}

function renderStyle(className, interpolatedCSS) {
  //only append the style in the head if it's not there
  const styleAppended = appended.includes(className);
  if (!styleAppended) {
    //create the style node
    const style = document.createElement('style');
    const cssClassName = '.' + className;
    style.innerHTML = interpolatedCSS
      .split('\n')
      .map(e => e.trim())
      .filter(Boolean)
      .join('')
      .split('}')
      .filter(Boolean)
      .map(
        e =>
          (e.includes('{')
            ? e.includes('@')
                ? e
                    .split('@')
                    .map((e, index) => {
                      if (index) {
                        return e
                          .split('{')
                          .map((e, index, array) => {
                            switch (true) {
                              case index === 0:
                                return e + '{ & ';
                              case index === array.length - 1:
                                return e + '}';
                              default:
                                return e;
                            }
                          })
                          .join('{');
                      }
                      return `& {${e}}`;
                    })
                    .join('@')
                : `& ${e}`
            : `&{${e}`)
      )
      .join('}')
      .replace(/&/g, cssClassName);
    style.id = className;
    style.className = STYLED_NAMESPACE;

    //append it!
    document.head.insertBefore(style, document.head.firstChild);
    appended.push(className);
  }
}

//take the exp and props variable, and create a reducer function for that.
function createRawCSSReducer(exp, props) {
  //combine the array of css.raw to a string, and invoke any function with props
  return function rawCSSReducer(res, string, i) {
    if (typeof exp[i] === 'function') {
      res += string + exp[i](props);
      return res;
    }
    if (exp[i]) {
      res += string + exp[i];
      return res;
    }
    res += string;
    return res;
  };
}

export function injectStyle(declaration) {
  const style = document.createElement('style');
  style.innerHTML = declaration;
  document.head.prepend(style);
}