import './aboutMeSection.scss';

import { Button, Col, Row, Space, Typography } from 'antd';
import React from 'react';

import SectionProps from '../common/Types';
import ThemeSwitcher from '../ThemeSwitcher';

const { Title } = Typography

const AboutMeSection = ({ id }: SectionProps) => {
	return (
		<Row id={id} align="middle" gutter={16} className="about-me-section padded-section">
			<Col xs={24} md={10}>
				<Title>Name's Jon</Title>
				<Title level={3}>Full-Stack Engineer with Cloud and Serverless expertise</Title>
				<Space size="middle">
					<Button type="primary" size="large">
						Hire me
					</Button>
					<Button type="primary" size="large" ghost>
						Resume
					</Button>
				</Space>
			</Col>
			<Col xs={24} md={14}>
				<img src="" alt="One handsome guy" />
			</Col>
		</Row>
	)
}

export default AboutMeSection
