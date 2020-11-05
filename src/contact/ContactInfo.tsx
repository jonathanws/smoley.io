import React from 'react';

import { getContactInformation } from '../modules/constants.module';

const ContactInfo = () => {
	const { address, email, website } = getContactInformation()

	return (
		<div>
			<div>{address}</div>
			<div>{email}</div>
			<div>{website}</div>
		</div>
	)
}

export default ContactInfo
