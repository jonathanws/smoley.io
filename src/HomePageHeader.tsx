import './homePageHeader.scss'

import { Anchor, Col, Layout, Row } from 'antd'
import React, { useState } from 'react'

import { ReactComponent as MainLogo } from './images/logo.svg'
import { columnWidths } from './pages/HomePage'
import ThemeSwitcher from './ThemeSwitcher'

const { Link } = Anchor
const { Header } = Layout

type HeaderProps = {
	links: Array<{
		anchor: string
		title: string
	}>
}
const HomePageHeader = ({ links }: HeaderProps) => {
	const scrollToTop = () => window.scroll({ top: 0, left: 0, behavior: 'smooth' })

	// Give the header a shadow when the user scrolls down
	const [shadowClass, setShadowClass] = useState('')
	window.addEventListener('scroll', () => setShadowClass(window.scrollY !== 0 ? 'scroll-shadow' : ''))

	return (
		<Header className={shadowClass}>
			<Row justify="center">
				<Col {...columnWidths} className="header-column">
					<MainLogo onClick={scrollToTop} />
					<div className="separator" />
					<Anchor>
						{links.map(({ anchor, title }) => (
							<Link href={`#${anchor}`} title={title} key={anchor} />
						))}
					</Anchor>

					<ThemeSwitcher />
				</Col>
			</Row>
		</Header>
	)
}

export default HomePageHeader
