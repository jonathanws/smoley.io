import './aboutMeSection.scss';

import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

import SectionProps from '../common/Types';

const { Title } = Typography

const AboutMeSection = ({ id }: SectionProps) => {
	return (
		<Row id={id} align="middle" className="about-me-section padded-section">
			<Col xs={24} md={10}>
				<Title>Name's Jon</Title>
				<Title level={4}>Full-Stack Engineer with Cloud and Serverless expertise</Title>
				<Button type="primary" size="large">
					Hire me
				</Button>
			</Col>
			<Col xs={24} md={14}>
				<img src="" alt="One handsome guy" />
			</Col>
		</Row>
	)
}

export default AboutMeSection
