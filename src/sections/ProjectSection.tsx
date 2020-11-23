import { Col, Row, Typography } from 'antd';
import React from 'react';

import SectionProps from '../common/Types';
import ImgReferee from '../images/projects/referee.png';
import Project from '../Project';

const { Title } = Typography

const Projects = ({ id }: SectionProps) => {
	const projects = [
		// 'mne1',
		// 'mne2',
		// 'website',
		{
			title: 'Referee',
			mainImg: ImgReferee,
		},
	]

	const widths = { xs: 12, md: 6 }

	return (
		<div id={id} className="padded-section">
			<Title level={2}>Projects</Title>
			<Title level={4}>Click any project to learn more</Title>

			<Row>
				{projects.map(({ mainImg, title }, index) => (
					<Col {...widths} key={index}>
						<Project title={title} mainImg={mainImg} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default Projects
