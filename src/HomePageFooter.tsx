import './homePageFooter.scss';

import { Col, Layout, Row } from 'antd';
import React from 'react';

import columnWidths from './pages/HomePage';

const { Footer } = Layout

const HomePageFooter = () => (
	<Footer>
		<Row justify="center">
			<Col {...columnWidths} style={{ color: 'white' }}>
				footer
			</Col>
		</Row>
	</Footer>
)

export default HomePageFooter
