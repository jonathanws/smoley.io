import './homePageContent.scss';

import { Col, Layout, Row } from 'antd';
import React from 'react';

import { columnWidths } from './pages/HomePage';

const { Content } = Layout

export type HomePageContentSection = {
	anchor: string
	title: string
	section: any
}
type HomePageContentProps = {
	sections: HomePageContentSection[]
}
const HomePageContent = ({ sections }: HomePageContentProps) => (
	<Content>
		{sections.map(({ section }, index) => (
			<Row justify="center" key={index}>
				<Col {...columnWidths}>{section}</Col>
			</Row>
		))}
	</Content>
)

export default HomePageContent
