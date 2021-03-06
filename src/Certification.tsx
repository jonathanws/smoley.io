import { Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography

export type CertificationProps = {
	title: string
	date: string
	img: string
	url?: string
}
const Certification = ({ title, date, img, url }: CertificationProps) => {
	return (
		<div>
			<img src={img} alt={title} />

			<Title level={3}>{title}</Title>
			<Text>{date}</Text>
		</div>
	)
}

export default Certification
