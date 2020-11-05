import { Button, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography

const AboutMeSection = () => {
	return (
		<>
			<Title>Jon</Title>
			<Paragraph>Developer</Paragraph>
			<Button type="primary">clicky</Button>
		</>
	)
}

export default AboutMeSection
