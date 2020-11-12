import './socialMediaButton.scss';

import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SocialMediaButtonProps = {
	title: string
	url: string
	icon: IconProp
}

const SocialMediaButton = ({ title, url, icon }: SocialMediaButtonProps) => {
	return (
		<div className="social-media-button">
			<a href={url} title={title} target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={icon} />
			</a>
		</div>
	)
}

export default SocialMediaButton
