import React from 'react';

import { InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

import { getSocialMediaInformation } from '../modules/constants.module';

type SocialMediaButtonProps = {
	id: string // TODO: reference enum ^^^
}

const SocialMediaButton = ({ id }: SocialMediaButtonProps) => {
	const { instagramUrl, linkedInUrl, twitterUrl } = getSocialMediaInformation()
	const socialsMap = [
		{
			key: 'instagram',
			title: 'Instagram',
			url: instagramUrl,
			icon: <InstagramOutlined />,
		},
		{
			key: 'twitter',
			title: 'Twitter',
			url: twitterUrl,
			icon: <TwitterOutlined />,
		},
		{
			key: 'linkedin',
			title: 'LinkedIn',
			url: linkedInUrl,
			icon: <LinkedinOutlined />,
		},
	]

	const getSocial = () => {
		const found = socialsMap.find(({ key }) => key === id)
		return found ? found : socialsMap[0]
	}

	const { title, url, icon } = getSocial()

	return (
		<div>
			<a href={url}>{title}</a>
			{icon}
		</div>
	)
}

export default SocialMediaButton
