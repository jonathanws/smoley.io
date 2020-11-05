import React from 'react';
import { Link } from 'react-router-dom';

type SideDrawerItemProps = {
	path: string // TODO make only valid paths
	title: string
}

const SideDrawerItem = ({ title, path }: SideDrawerItemProps) => {
	return (
		<div>
			<Link to={path}>{title}</Link>
		</div>
	)
}

export default SideDrawerItem
