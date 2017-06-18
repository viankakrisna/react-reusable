import React from 'react';
import styled from 'styled-components';
import Search from 'react-icons/lib/md/search';
import { compose, defaultProps, withState } from 'recompose';

export const SearchBarWrapper = styled.div`
	display: flex;
	flex: 0 0 ${props => props.theme.font.size.base * 15};
	background: ${props => props.theme.backgroundColor.headerSearchBar || 'rgba(255,255,255,0.25)'};
	color: ${props => props.theme.color.headerSearchBar || 'black'};
	border-radius: ${props => props.theme.borderRadius.searchbarWrapper || '2px'};
	overflow: hidden;
`;

export const SearchBarInput = styled.input`
	line-height: ${props => props.theme.height.headerInner};
	border: 0;
	padding: 0 ${props => props.theme.font.size.base};
	transition: 250ms;
	font-size: ${props => props.theme.font.size.base};
	box-sizing: border-box;
	background: ${props => props.theme.backgroundColor.headerSearchBarInput || 'transparent'};
	color: ${props => props.theme.color.headerSearchBarInput || 'inherit'};
	flex: 1;
	&:focus {
		outline: none;
	}
	&.focus {
		color: black;
		background: ${props => props.theme.color.focusedSearchBarInputBg || 'white'};
	}
`;

export const SearchBarInputButton = styled.button`
	line-height: ${props => props.theme.height.headerInner};
	border: 0;
	padding: 0 ${props => props.theme.font.size.base};
	color: ${props => props.theme.color.headerSearchBarInput || 'inherit'};
	transition: 250ms;
	background: ${props => props.theme.backgroundColor.searchBarInputButton || 'transparent'};
	font-size: ${props => props.theme.font.size.base};
	box-sizing: border-box;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&.focus {
		color: black;
		background: ${props => props.theme.color.primary};
		outline: none;
	}
`;

export const SearchBar = compose(
	defaultProps({
		defaultValue: 'Search',
	}),
	withState('value', 'setValue')
)(props => (
	<SearchBarWrapper>
		<SearchBarInputButton />
		<SearchBarInput
			onFocus={e => (props.value === undefined ? props.setValue('') : null)}
			value={
				props.value === undefined ? props.defaultValue || '' : props.value || ''
			}
			onChange={e => {
				props.setValue(e.target.value);
				e.persist();
				if (props.onChange) {
					props.onChange(e);
				}
			}}
		/>
	</SearchBarWrapper>
));

SearchBarInputButton.defaultProps = {
	children: <Search />,
};
export default SearchBar;
