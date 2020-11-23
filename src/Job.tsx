import './job.scss'

import { Card, Typography } from 'antd'
import React from 'react'

const { Meta } = Card
const { Title, Link } = Typography

export type JobProps = {
	company: string
	description: string
	duration: string[]
	logo: string
	title: string
	website: string
}

const Job = ({ company, logo, description, duration, title, website }: JobProps) => {
	const actions = [
		<Link href={website} target="_blank">
			View Website
		</Link>,
	]

	const cover = <img src={logo} alt={company} />

	const headings = (
		<>
			<Title level={4}>{title}</Title>
			<div>{company}</div>
		</>
	)

	return (
		<Card actions={actions} bordered={false} className="job-card" cover={cover}>
			<div className="circle">
				<div>{duration[0]}</div>
				<div>{duration[1]}</div>
			</div>

			<Meta title={headings} description={description} />
		</Card>
	)
}

export default Job
