import React from 'react';
import {
	Panel,
	FlexColumn,
	Main,
	MainHeader,
	MainContent,
	Button,
	Table,
} from '../../../src';

const Posts = props => (
	<Main>
		<MainHeader>
			<FlexColumn>
				Posts
			</FlexColumn>
			<FlexColumn>
				<Button>+ Add New</Button>
			</FlexColumn>
		</MainHeader>
		<MainContent>
			<Panel>
				<Table>
					<tbody>
						<tr>
							<td>
								Hello World!
							</td>
							<td>
								viankakrisna
							</td>
							<td>
								Uncategorized
							</td>
							<td>
								-
							</td>
							<td>
								-
							</td>
							<td>
								Published
								2017/04/23
							</td>
						</tr>
					</tbody>
				</Table>
			</Panel>
		</MainContent>
	</Main>
);

export default Posts;
