import './homePage.scss';

import { Col, Layout, Menu, Row } from 'antd';
import React from 'react';

import Paths from '../enums/Paths';
// import Header from '../common/Header';
// import SideDrawer from '../common/SideDrawer';
import AboutMeSection from '../sections/AboutMeSection';
import CertificationSection from '../sections/CertificationSection';
import ContactSection from '../sections/ContactSection';
import Experience from '../sections/Experience';
import ProjectSection from '../sections/ProjectSection';

const { Header, Content, Footer } = Layout

const HomePage = () => {
	// const [visible, setVisible] = useState(false)

	// const openDrawer = () => setVisible(true)
	// const closeDrawer = () => setVisible(false)

	// <>
	// 	<Button type="primary" onClick={openDrawer}>
	// 		clicky
	// 	</Button>

	// 	<SideDrawer open={visible} onClose={closeDrawer} />
	// </>

	// xs | xm | md | lg | xl | xxl
	const widths = { xs: 24, md: 22, xl: 20, xxl: 16 }

	const sections = [<AboutMeSection />, <Experience />, <ProjectSection />, <CertificationSection />, <ContactSection />]

	return (
		<Layout>
			<Header>
				<Row justify="center">
					<Col {...widths}>
						<Menu mode="horizontal">
							<Menu.Item key={Paths.HOME}>Home</Menu.Item>
						</Menu>
					</Col>
				</Row>
			</Header>

			<Content className="sections-container">
				{sections.map((section, index) => (
					<Row justify="center" key={index}>
						<Col {...widths}>{section}</Col>
					</Row>
				))}
			</Content>

			<Footer>
				<Row justify="center">
					<Col {...widths}>footer</Col>
				</Row>
			</Footer>
		</Layout>
	)
}

export default HomePage
