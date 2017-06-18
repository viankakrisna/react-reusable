import React from 'react';
import {
	SearchBarInput,
	SearchBarInputButton,
	SearchBarWrapper,
	FlexColumn,
	Container,
	Header,
	Logo,
	Avatar,
	Menu,
} from '../../../src';

export const AdminHeader = props => (
	<Header fixed>
		<Container>
			<FlexColumn>
				<Menu to="/twitter">Home</Menu>
				<Menu to="/twitter/notifications">Notifications</Menu>
				<Menu to="/twitter/messages">Messages</Menu>
			</FlexColumn>
			<FlexColumn flex={1}>
				<Logo>
					TW
				</Logo>
			</FlexColumn>
			<FlexColumn flex={'0 0 221px'}>
				<SearchBarWrapper rounded>
					<SearchBarInput defaultValue={'Search Twitter'} />
					<SearchBarInputButton />
				</SearchBarWrapper>
			</FlexColumn>
			<FlexColumn>
				<Avatar />
			</FlexColumn>
		</Container>
	</Header>
);

export default AdminHeader;
