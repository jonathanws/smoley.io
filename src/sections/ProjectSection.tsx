import { Col, Row, Tabs, Typography } from 'antd'
import React from 'react'

import SectionProps from '../common/Types'
import ImgReferee from '../images/project-referee.png'
import Project from '../Project'

const { Title } = Typography
const { TabPane } = Tabs

const Projects = ({ id }: SectionProps) => {
	const onTabChange = (e: any) => console.log(e)

	const projects = [
		// 'mne1',
		// 'mne2',
		// 'website',
		{
			title: 'Referee',
			mainImg: ImgReferee,
		},
	]

	const widths = { xs: 12, md: 6 }

	return (
		<div id={id} className="project-section padded-section">
			<Typography>
				<Title level={2}>Projects</Title>
				<Title level={4}>Click any project to learn more</Title>
			</Typography>

			<Row gutter={24}>
				{projects.map(({ mainImg, title }) => (
					<Col {...widths}>
						<Project title={title} mainImg={mainImg} />
					</Col>
				))}
			</Row>

			<Tabs defaultActiveKey="1" onChange={onTabChange}>
				<TabPane tab="Tab 1" key="1">
					Content of Tab Pane 1
				</TabPane>
				<TabPane tab="Tab 2" key="2">
					Content of Tab Pane 2
				</TabPane>
				<TabPane tab="Tab 3" key="3">
					Content of Tab Pane 3
				</TabPane>
			</Tabs>
		</div>
	)
}

export default Projects
