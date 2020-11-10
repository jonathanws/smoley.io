import { Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography
type ProjectProps = {
	title: string
	mainImg: any
}
const Project = ({ title, mainImg }: ProjectProps) => {
	return (
		<div className="project">
			<img src={mainImg} alt="title" style={{ width: '100%' }} />
			<Paragraph>{title}</Paragraph>
		</div>
	)
}

export default Project
