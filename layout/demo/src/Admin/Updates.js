import React from 'react';
import {
	FlexColumn,
	FlexRow,
	Main,
	MainHeader,
	MainContent,
	Button,
} from '../../../src';

const Updates = props => (
	<Main>
		<MainHeader>
			Wordpress Updates
		</MainHeader>
		<MainContent>
			<FlexRow alignItems={'center'}>
				<FlexColumn>
					Last checked on April 25, 2017 at 12:59 am.
				</FlexColumn>
				<FlexColumn>
					<Button>Check Again</Button>
				</FlexColumn>
			</FlexRow>
		</MainContent>
	</Main>
);

export default Updates;
