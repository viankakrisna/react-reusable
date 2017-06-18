import React from 'react';
import {
	FlexColumn,
	Header,
	Logo,
	SearchBar,
	Avatar,
	MenuButton,
	Menu,
} from '../../../src';

export const AdminHeader = props => (
	<Header>
		<FlexColumn>
			<MenuButton />
		</FlexColumn>
		<FlexColumn>
			<Logo>
				Layout Component
			</Logo>
		</FlexColumn>
		<FlexColumn flex={1} />
		<FlexColumn>
			<Menu to="/admin/comment">Comment</Menu>
			<Menu
				onClick={e => {
					e.preventDefault();
					props.setActiveHeaderMenu('new');
				}}
			>
				New
			</Menu>
			<Menu />
			<Menu />
			<Menu />
		</FlexColumn>
		<FlexColumn>
			<SearchBar />
		</FlexColumn>
		<FlexColumn>
			<Avatar />
		</FlexColumn>
	</Header>
);

export default AdminHeader;
