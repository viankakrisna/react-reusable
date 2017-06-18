import React from 'react';
import { Panel, FlexColumn, Main, MainHeader, MainContent } from '../../../src';

const Dashboard = props => (
	<Main>
		<MainHeader>
			Dashboard
		</MainHeader>
		<MainContent>
			<Panel>
				<FlexColumn flex="0 0 100%">
					<h1>
						Welcome to Wordpress!
					</h1>
				</FlexColumn>
				<FlexColumn flex="0 0 100%">
					<p>
						We’ve assembled some links to get you started:
					</p>
				</FlexColumn>
			</Panel>
		</MainContent>
	</Main>
);

export default Dashboard;
