import './homePage.scss';

import { Layout } from 'antd';
import React from 'react';

import HomePageContent, { HomePageContentSection } from '../HomePageContent';
import HomePageFooter from '../HomePageFooter';
import HomePageHeader from '../HomePageHeader';
import AboutMeSection from '../sections/AboutMeSection';
import CertificationSection from '../sections/CertificationSection';
import ContactSection from '../sections/ContactSection';
import Experience from '../sections/Experience';
import ProjectSection from '../sections/ProjectSection';

// xs | xm | md | lg | xl | xxl
export const columnWidths = { xs: 24, md: 22, xl: 20, xxl: 16 }

const HomePage = () => {
	const getId = (name: string) => `${name}-section`

	const aboutMeId = getId('about')
	const experienceId = getId('experience')
	const projectId = getId('project')
	const certificationId = getId('certification')
	const contactId = getId('contact')

	const sections: HomePageContentSection[] = [
		{
			anchor: aboutMeId,
			section: <AboutMeSection id={aboutMeId} />,
			title: 'About Me',
		},
		{
			anchor: experienceId,
			section: <Experience id={experienceId} />,
			title: 'Experience',
		},
		{
			anchor: projectId,
			section: <ProjectSection id={projectId} />,
			title: 'Projects',
		},
		{
			anchor: certificationId,
			section: <CertificationSection id={certificationId} />,
			title: 'Certifications',
		},
		{
			anchor: contactId,
			section: <ContactSection id={contactId} />,
			title: 'Contact',
		},
	]

	const links = sections.map(({ anchor, title }) => ({ anchor, title }))

	return (
		<Layout className="home-page">
			<HomePageHeader links={links} />

			<HomePageContent sections={sections} />

			<HomePageFooter />
		</Layout>
	)
}

export default HomePage
