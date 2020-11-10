import './experience.scss';

import { Card, Col, Row, Typography } from 'antd';
import React from 'react';

import amazonWebServices from '../images/experience-aws.svg';
import freedomConsultingGroup from '../images/experience-freedom.svg';
import towsonUniversity from '../images/experience-towson.svg';

const { Title } = Typography
const { Meta } = Card

const jobs = [
	{ logo: towsonUniversity, company: 'Towson University', title: 'Mobile Application Developer', description: '' },
	{ logo: freedomConsultingGroup, company: 'Freedom Consulting Group', title: 'Junior Software Engineer', description: '' },
	{ logo: amazonWebServices, company: 'Amazon Web Services', title: 'Integration Architect', description: '' },
]

const Experience = () => {
	return (
		<div className="padded-section">
			<Typography>
				<Title>Experience</Title>
			</Typography>

			<Row>
				{jobs.map(({ company, title, logo }, index) => {
					return (
						<Col xs={12} md={8} key={index}>
							// TODO: remove url
							<Card hoverable cover={<img alt="example" src={logo ?? 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}>
								<Meta title={company} description={title} />
							</Card>
						</Col>
					)
				})}
			</Row>
		</div>
	)
}

export default Experience
