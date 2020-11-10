import { Col, Row, Typography } from 'antd';
import React from 'react';

import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import ContactSocialMedia from '../contact/ContactSocialMedia';

const { Title } = Typography

const ContactMe = () => {
	return (
		<div className="padded-section">
			<Typography>
				<Title>Contact Me</Title>
			</Typography>

			<Row>
				<Col xs={24} md={6}>
					<ContactInfo />
					<ContactSocialMedia />
				</Col>
				<Col xs={24} md={18}>
					<ContactForm />
				</Col>
			</Row>
		</div>
	)
}

export default ContactMe
