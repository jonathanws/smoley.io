import './homePageFooter.scss';

import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { columnWidths } from './pages/HomePage';

const { Footer } = Layout
const { Link } = Typography

const HomePageFooter = () => (
	<Footer>
		<Row justify="center">
			<Col {...columnWidths}>
				<Row>
					<Col xs={24} md={12}>
						<Link href="https://github.com/jonathanws/smoley.io" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
							Webapp source code
						</Link>
					</Col>
					<Col xs={24} md={12}>
						<Link href="https://github.com/jonathanws/template-infrastructure-webapp">
							<FontAwesomeIcon icon={faGithub} />
							Webapp infrastructure code
						</Link>
					</Col>
				</Row>
			</Col>
		</Row>
	</Footer>
)

export default HomePageFooter
