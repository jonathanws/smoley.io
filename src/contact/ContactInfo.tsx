import './contactInfo.scss'

import { Typography } from 'antd'
import React from 'react'

import HomeIcon from '../images/icons/HomeIcon'
import MailIcon from '../images/icons/MailIcon'
import WorldIcon from '../images/icons/WorldIcon'
import { getContactInformation } from '../modules/constants.module'

const { Text, Title } = Typography

const ContactInfo = () => {
	const { address, email, website } = getContactInformation()

	return (
		<div className="contact-info">
			<Typography>
				<Title level={3}>Contact Info</Title>
			</Typography>

			<div>
				<HomeIcon />
				<Text>{address}</Text>
			</div>
			<div>
				<MailIcon />
				<Text>{email}</Text>
			</div>
			<div>
				<WorldIcon />
				<Text>{website}</Text>
			</div>
		</div>
	)
}

export default ContactInfo
