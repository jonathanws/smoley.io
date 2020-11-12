import './contactSocialMedia.scss';

import { Typography } from 'antd';
import React from 'react';

import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { getSocialMediaInformation } from '../modules/constants.module';
import SocialMediaButton, { SocialMediaButtonProps } from './SocialMediaButton';

const { Title } = Typography

const ContactSocialMedia = () => {
	const { instagramUrl, linkedInUrl, twitterUrl } = getSocialMediaInformation()

	const accounts: SocialMediaButtonProps[] = [
		{
			title: 'Instagram: @smoleypoleyoley',
			url: instagramUrl,
			icon: faInstagram,
		},
		{
			title: 'Twitter: @SmoleyPoleyOley',
			url: twitterUrl,
			icon: faTwitter,
		},
		{
			title: 'LinkedIn: Jon Smoley',
			url: linkedInUrl,
			icon: faLinkedinIn,
		},
		{
			title: 'Github: jonathanws',
			url: 'https://github.com/jonathanws',
			icon: faGithub,
		},
	]

	return (
		<div className="contact-social-media">
			<Title level={3}>Follow Me</Title>

			<div className="buttons">
				{accounts.map(({ title, url, icon }, index) => (
					<SocialMediaButton title={title} url={url} icon={icon} key={index} />
				))}
			</div>
		</div>
	)
}

export default ContactSocialMedia
