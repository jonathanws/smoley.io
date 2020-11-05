import { Typography } from 'antd';
import React from 'react';

import Certification from '../Certification';
import awsCloudPractitioner from '../images/aws-cloud-practitioner-badge.png';

const { Title } = Typography

const certs = [
	{
		title: 'AWS Certified Cloud Practitioner',
		date: "August '20",
		img: awsCloudPractitioner,
	},
]

const CertificationSection = () => {
	return (
		<div>
			<Typography>
				<Title>Certifications</Title>
			</Typography>

			<div>
				{certs.map((cert, index) => (
					<Certification key={index} {...cert} />
				))}
			</div>
		</div>
	)
}

export default CertificationSection
