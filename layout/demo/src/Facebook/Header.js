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
				<Logo>
					FB
				</Logo>
			</FlexColumn>
			<FlexColumn flex={'0 0 448px'}>
				<SearchBarWrapper>
					<SearchBarInput defaultValue={'Search Facebook'} />
					<SearchBarInputButton />
				</SearchBarWrapper>
			</FlexColumn>
			<FlexColumn flex={1} />
			<FlexColumn>
				<Menu />
				<Menu />
				<Menu />
				<Menu />
				<Menu />
			</FlexColumn>

			<FlexColumn>
				<Avatar />
			</FlexColumn>
		</Container>
	</Header>
);

export default AdminHeader;
