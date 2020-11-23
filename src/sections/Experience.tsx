import { Col, Row, Typography } from 'antd'
import React from 'react'

import SectionProps from '../common/Types'
import amazonWebServicesLogo from '../images/experience/logos/aws.svg'
import freedomConsultingGroupLogo from '../images/experience/logos/freedom.svg'
import libertyMountainRacingTeamLogo from '../images/experience/logos/lmrt.svg'
import towsonUniversityLogo from '../images/experience/logos/towson.svg'
import Job, { JobProps } from '../Job'

const { Title } = Typography

const jobs: JobProps[] = [
	{
		company: 'Amazon Web Services',
		description: 'Worked within Professional Services to create numerous proof-of-concepts demonstrating the abilities of AWS.  This included front ends, cloud services, and combinations of both.',
		duration: ['2', 'yrs'],
		logo: amazonWebServicesLogo,
		title: 'Integration Architect',
		website: 'https://aws.amazon.com/professional-services/',
	},
	{
		company: 'Freedom Consulting Group',
		description: 'Implemented features in full-stack MEAN webapp for secure government customer.',
		duration: ['5', 'yrs'],
		logo: freedomConsultingGroupLogo,
		title: 'Junior Software Engineer',
		website: 'https://freedomconsultinggroup.com/',
	},
	{
		company: 'Towson University',
		description: "Created Android mobile app WavyLeaf to help Biology department's effort to track spread of Wavyleaf Basketgrass.",
		duration: ['3', 'mon'],
		logo: towsonUniversityLogo,
		title: 'Mobile Application Developer',
		website: 'https://www.towson.edu/',
	},
	{
		company: 'Liberty Mountain Racing Team',
		description: "Led LMRT's U10 program in education of fundamentals of alpine ski racing.",
		duration: ['9', 'yrs'],
		logo: libertyMountainRacingTeamLogo,
		title: 'Lead U10 Ski Racing Coach',
		website: 'https://www.teamunify.com/team/lmrtski/page/home',
	},
]
const Experience = ({ id }: SectionProps) => {
	return (
		<div id={id} className="padded-section">
			<Title level={2}>Experience</Title>
			<Title level={4}>Some subtitle stuff</Title>

			<div style={{ overflow: 'hidden' }}>
				<Row gutter={[64, 64]}>
					{jobs.map(({ company, logo, description, duration, title, website }, index) => (
						<Col xs={24} md={8} key={index}>
							<Job company={company} logo={logo} description={description} duration={duration} title={title} website={website} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default Experience
