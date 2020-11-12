import './contactSection.scss';

import { Col, Row, Typography } from 'antd';
import React from 'react';

import SectionProps from '../common/Types';
import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import ContactSocialMedia from '../contact/ContactSocialMedia';

const { Title } = Typography

const ContactMe = ({ id }: SectionProps) => {
	return (
		<div id={id} className="contact-section padded-section">
			<Title level={2}>Contact Me</Title>

			{/* Display for mobile */}
			<Row className="mobile">
				<Col xs={24}>
					<ContactSocialMedia />
				</Col>
				<Col xs={24}>
					<ContactForm />
				</Col>
				<Col xs={24}>
					<ContactInfo />
				</Col>
			</Row>

			{/* Display for desktop (md and above) */}
			<Row className="desktop">
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
