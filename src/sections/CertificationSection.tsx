import { Typography } from 'antd';
import React from 'react';

import Certification from '../Certification';
import SectionProps from '../common/Types';
import awsCloudPractitioner from '../images/aws-cloud-practitioner-badge.png';

const { Title } = Typography

const certs = [
	{
		title: 'AWS Certified Cloud Practitioner',
		date: "August '20",
		img: awsCloudPractitioner,
	},
]
const CertificationSection = ({ id }: SectionProps) => {
	return (
		<div id={id} className="padded-section">
			<Title level={2}>Certifications</Title>

			<div>
				{certs.map((cert, index) => (
					<Certification key={index} {...cert} />
				))}
			</div>
		</div>
	)
}

export default CertificationSection
