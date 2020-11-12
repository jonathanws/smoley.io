import './contactInfo.scss';

import { Typography } from 'antd';
import React from 'react';

import { faEnvelope, faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getContactInformation } from '../modules/constants.module';

const { Text, Title } = Typography

const ContactInfo = () => {
	const { address, email, website } = getContactInformation()

	return (
		<div className="contact-info">
			<Title level={3}>Contact Info</Title>

			<div>
				<FontAwesomeIcon icon={faMapMarkerAlt} />
				<Text>{address}</Text>
			</div>
			<div>
				<FontAwesomeIcon icon={faEnvelope} />
				<Text>{email}</Text>
			</div>
			<div>
				<FontAwesomeIcon icon={faGlobeAmericas} />
				<Text>{website}</Text>
			</div>
		</div>
	)
}

export default ContactInfo
