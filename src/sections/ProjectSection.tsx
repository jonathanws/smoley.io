import { Tabs, Typography } from 'antd';
import React from 'react';

const { Title } = Typography
const { TabPane } = Tabs

const Projects = () => {
	const onTabChange = (e: any) => console.log(e)

	return (
		<div className="project-section padded-section">
			<Typography>
				<Title>Projects</Title>
			</Typography>

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
