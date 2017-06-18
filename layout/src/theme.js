export default function theme() {
	const constants = {
		size: {
			base: 16,
		},
	};
	return {
		constants,
		height: {
			header: `${constants.size.base * 3.5}px`,
			headerInner: '36px',
		},
		font: {
			size: {
				base: `${constants.size.base}px`,
				half: `${constants.size.base / 2}px`,
			},
		},
		width: {
			container: '1024px',
			sidebar: `${constants.size.base * 16}px`,
		},
		backgroundColor: {
			primary: 'indigo',
		},
		color: {
			primary: 'white',
			headerSearchBar: 'white',
		},
		border: {},
		borderColor: {},
		borderRadius: {
			searchbarWrapper: '2px',
		},
	};
}
