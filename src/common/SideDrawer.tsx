import { Drawer } from 'antd';
import React from 'react';

import Paths from '../enums/Paths';
import SideDrawerItem from './SideDrawerItem';

type SideDrawerProps = {
	open: boolean
	onClose: () => void
}

const SideDrawer = ({ open, onClose }: SideDrawerProps) => {
	return (
		<Drawer title="Drawer" placement="left" closable={false} onClose={onClose} visible={open}>
			<SideDrawerItem path={Paths.HOME} title="Home" />
		</Drawer>
	)
}

export default SideDrawer
