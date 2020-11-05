import './aboutMeSection.scss';

import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography

const AboutMeSection = () => {
	return (
		<Row align="middle" className="about-me-section">
			<Col xs={24} md={10}>
				<Title>Name's Jon</Title>
				<Paragraph>Full-Stack Engineer</Paragraph>
				<Button type="primary">Hire me</Button>
			</Col>
			<Col xs={24} md={14}>
				<img src="" alt="One handsome guy" />
			</Col>
		</Row>
	)
}

export default AboutMeSection
