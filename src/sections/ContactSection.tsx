import { Typography } from 'antd';
import React from 'react';

import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import ContactSocialMedia from '../contact/ContactSocialMedia';

const { Title } = Typography

const ContactMe = () => {
	return (
		<>
			<Typography>
				<Title>Contact Me</Title>
			</Typography>

			<ContactForm />

			<ContactInfo />

			<ContactSocialMedia />
		</>
	)
}

export default ContactMe
