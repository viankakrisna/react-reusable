import React from 'react';
import { render } from 'react-dom';

import { FullHeight, Grid, Row, Col, Box, Padding } from '../../src';

class Demo extends React.Component {
	render() {
		return (
			<FullHeight style={{ background: 'red' }}>
				<Grid>
					<Row>
						<Col md={1 / 2} style={{ background: 'purple' }}>
							<Padding all="1em">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
							</Padding>
						</Col>
						<Col md={1 / 2} style={{ background: 'yellow' }}>
							<Box ar={1 / 1}>
								Test
							</Box>
						</Col>
						<Col md={1 / 3} style={{ background: 'blue' }}>
							<Box ar={9 / 16}>
								<Row>
									<Col md={1 / 2} style={{ background: 'red' }}>
										<Padding all="1em">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, in, eveniet, voluptates quis accusamus nam nihil sit iste quam error et. Voluptate, amet, velit. Provident commodi maiores, quis quae?
										</Padding>
									</Col>
									<Col md={1 / 2} style={{ background: 'orange' }}>
										<Box ar={1 / 1}>
											Test
										</Box>
									</Col>
									<Col md={1 / 3} style={{ background: 'indigo' }}>
										<Box ar={9 / 16}>
											Test
										</Box>
									</Col>
								</Row>
							</Box>
						</Col>
					</Row>
				</Grid>
			</FullHeight>
		);
	}
}

render(<Demo />, document.querySelector('#demo'));
