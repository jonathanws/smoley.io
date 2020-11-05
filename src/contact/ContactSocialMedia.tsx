import './contactSocialMedia.scss';

import React from 'react';

import InstagramIcon from '../images/icons/InstagramIcon';
import LinkedInIcon from '../images/icons/LinkedInIcon';
import TwitterIcon from '../images/icons/TwitterIcon';
import { getSocialMediaInformation } from '../modules/constants.module';
import SocialMediaButton from './SocialMediaButton';

const ContactSocialMedia = () => {
	type Account = {
		key: string
		title: string
		url: string
		icon: React.ReactNode
	}

	const { instagramUrl, linkedInUrl, twitterUrl } = getSocialMediaInformation()

	const accounts: Account[] = [
		{
			key: 'instagram',
			title: 'Instagram',
			url: instagramUrl,
			icon: <InstagramIcon />,
		},
		{
			key: 'twitter',
			title: 'Twitter',
			url: twitterUrl,
			icon: <TwitterIcon />,
		},
		{
			key: 'linkedin',
			title: 'LinkedIn',
			url: linkedInUrl,
			icon: <LinkedInIcon />,
		},
	]

	return (
		<div className="contact-social-media">
			{accounts.map(({ title, url, icon }) => (
				<SocialMediaButton title={title} url={url} icon={icon} />
			))}
		</div>
	)
}

export default ContactSocialMedia
