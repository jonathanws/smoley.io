import './experience.scss'

import { Card, Col, Row, Typography } from 'antd'
import React from 'react'

import amazonWebServices from '../images/experience-aws.svg'
import freedomConsultingGroup from '../images/experience-freedom.svg'
import towsonUniversity from '../images/experience-towson.svg'

const { Title, Paragraph, Text } = Typography
const { Meta } = Card

const jobs = [
	{
		logo: towsonUniversity,
		company: 'Towson University',
		title: 'Mobile Application Developer',
		description: "Created Android mobile app WavyLeaf to help Biology department's effort to track spread of Wavyleaf Basketgrass",
	},
	{
		logo: freedomConsultingGroup,
		company: 'Freedom Consulting Group',
		title: 'Junior Software Engineer',
		description: '',
	},
	{
		logo: '',
		company: 'Liberty Mountain Racing Team',
		title: 'Lead U10 Ski Racing Coach',
		description: "Led LMRT's U10 program in education of fundamentals of alpine ski racing",
	},
	{
		logo: amazonWebServices,
		company: 'Amazon Web Services',
		title: 'Integration Architect',
		description: '',
	},
]

const Experience = () => {
	return (
		<div className="padded-section">
			<Typography>
				<Title level={2}>Experience</Title>
				<Paragraph>Some subtitle stuff</Paragraph>
			</Typography>

			<Row>
				{jobs.map(({ company, description, logo, title }, index) => {
					return (
						<Col xs={12} md={8} key={index}>
							{/* TODO: remove url */}
							<Card hoverable cover={<img alt="example" src={logo ?? 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}>
								<Meta title={company} description={title} />

								<div className="hidden-description">
									<Paragraph strong>{company}</Paragraph>
									<Paragraph>{title}</Paragraph>
									<Text>{description}</Text>
								</div>
							</Card>
						</Col>
					)
				})}
			</Row>
		</div>
	)
}

export default Experience
