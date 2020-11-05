import { Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Paths from '../enums/Paths';

const Header = () => {
	const history = useHistory()

	const onClick = ({ key }: any) => history.push(key)

	return (
		<Menu onClick={onClick} mode="horizontal">
			<Menu.Item key={Paths.HOME}>Home</Menu.Item>
		</Menu>
	)
}

export default Header
