import React from 'react';

const e = React.createElement;
const appended = [];

//styled-components wannabe! take a component
export default function styled(Component) {
	//then create tagged template literal for that component
	return memoize(function createStyled(css, ...exp) {
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
				createHashFromString(interpolatedCSS),
			].join('_');

			renderStyle(className, interpolatedCSS);

			return e(
				Component,
				Object.assign({}, props, {
					className: [className, props.className].filter(Boolean).join(' '),
				})
			);
		};
	});
}

export function keyframes(css) {
	const interpolated = css.raw.reduce(createRawCSSReducer());
	const hash = ['keyframes', createHashFromString(interpolated)].join('_');
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
		style.innerHTML = interpolatedCSS.replace(/&/g, '.' + className);
		style.id = className;

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

function createHashFromString(str) {
	var hash = 0;
	var i;
	var char;
	for (i = 0; i < str.length; i++) {
		char = str.charCodeAt(i);
		hash += char;
	}
	return hash;
}

function memoize(func) {
	var memo = {};
	var slice = Array.prototype.slice;

	return function() {
		var args = slice.call(arguments);

		if (args in memo) return memo[args];
		else return (memo[args] = func.apply(this, args));
	};
}
