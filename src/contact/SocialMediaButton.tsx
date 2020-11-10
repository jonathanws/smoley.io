import './socialMediaButton.scss'

import React from 'react'

type SocialMediaButtonProps = {
	title: string
	url: string
	icon: React.ReactNode
}

const SocialMediaButton = ({ title, url, icon }: SocialMediaButtonProps) => {
	return (
		<div className="social-media-button">
			<a href={url} title={title} target="_blank" rel="noreferrer">
				{icon}
			</a>
		</div>
	)
}

export default SocialMediaButton
