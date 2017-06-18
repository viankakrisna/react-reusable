import React from 'react';
import { Main, MainContent } from '../../../src/Main';
import { Panel, PanelHeading } from '../../../src/Panel';
import { FlexColumn } from '../../../src';

const AdminMain = props => (
	<Main>
		<MainContent>
			<FlexColumn flex={1}>
				<div>
					<PanelHeading>
						<FlexColumn>
							Create a Post
						</FlexColumn>
						<FlexColumn>
							Photo/Video Album
						</FlexColumn>
						<FlexColumn>
							Live Video
						</FlexColumn>
					</PanelHeading>
					<Panel>
						What's on your mind?
					</Panel>
				</div>
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
			</FlexColumn>
			<FlexColumn flex={'0 0 308px'}>
				<Panel />
			</FlexColumn>
		</MainContent>
	</Main>
);

export default AdminMain;
