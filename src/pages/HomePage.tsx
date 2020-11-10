import './homePage.scss'

import { Col, Layout, Menu, Row } from 'antd'
import React, { useState } from 'react'

import Paths from '../enums/Paths'
import AboutMeSection from '../sections/AboutMeSection'
import CertificationSection from '../sections/CertificationSection'
import ContactSection from '../sections/ContactSection'
import Experience from '../sections/Experience'
import ProjectSection from '../sections/ProjectSection'

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

	const [shadowClass, setShadowClass] = useState(false)
	window.addEventListener('scroll', () => setShadowClass((window.scrollY !== 0) as boolean))

	return (
		<Layout className="home-page">
			<Header className={shadowClass ? 'scroll-shadow' : ''}>
				<Row justify="center">
					<Col {...widths}>
						<div className="header-container">
							<Menu mode="horizontal">
								<Menu.Item key={Paths.HOME}>Home</Menu.Item>
							</Menu>
						</div>
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
