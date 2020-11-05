import '../styles/_screen-sizes.scss';

// import { Button, Col, Divider, Layout, Menu, Row } from 'antd';
import { Col, Layout, Menu, Row } from 'antd';
// import React, { useLayoutEffect, useState } from 'react';
import React from 'react';

import Paths from '../enums/Paths';
// import Header from '../common/Header';
// import SideDrawer from '../common/SideDrawer';
// import AboutMeSection from '../sections/AboutMeSection';
// import CertificationSection from '../sections/CertificationSection';
import ContactSection from '../sections/ContactSection';

const { Header, Content, Footer } = Layout
// import ProjectSection from '../sections/ProjectSection';

const HomePage = () => {
	// const [visible, setVisible] = useState(false)

	// const openDrawer = () => setVisible(true)
	// const closeDrawer = () => setVisible(false)

	// const style = { background: '#0092ff', padding: '8px 0' }

	// <>
	// 	<Header />

	// 	<Button type="primary" onClick={openDrawer}>
	// 		clicky
	// 	</Button>

	// 	<SideDrawer open={visible} onClose={closeDrawer} />

	// 	<AboutMeSection />

	// 	<CertificationSection />

	// 	<ProjectSection />

	// 	<ContactSection />
	// </>
	return (
		<Layout>
			<Header>
				<Menu mode="horizontal">
					<Menu.Item key={Paths.HOME}>Home</Menu.Item>
				</Menu>
			</Header>

			<Content>
				content
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col xs={24} style={{ background: '#0092ff', padding: '8px 0' }}>
						here
					</Col>
					{/* <Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col> */}
				</Row>
			</Content>

			<Footer>
				<ContactSection />
			</Footer>
		</Layout>
	)
}

export default HomePage
