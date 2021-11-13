import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/auth/authReducer';
import { clearSuccessMsg, setUserMenu } from '../../reducers/ui/uiReducer';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';

const UserMenu = () => {
	const dispatch = useDispatch();
	const { userData } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(setUserMenu(false));
		dispatch(clearSuccessMsg());
	};

	const handleUserMenu = () => {
		dispatch(setUserMenu(false));
	};

	return (
		<Box
			position='absolute'
			width='120px'
			alignItems='center'
			right={['10px', '10px', '110px']}
			top='5'
			justifyContent='center'
			bg='#1d1d1dfd'
			color='#e4e4e4'
			height='160px'
			zIndex={100}
		>
			<GroupList display='flex' flexDirection='column' alignItems='center'>
				<Link to='/profile' onClick={handleUserMenu}>
					<ListItem mb='20px'>Edit User</ListItem>
				</Link>
				<Link to='/purchases' onClick={handleUserMenu}>
					<ListItem mb='20px'>Purchases</ListItem>
				</Link>
				{userData.isAdmin && (
					<Link to='/adminpanel' onClick={handleUserMenu}>
						<ListItem mb='20px'>Admin Panel</ListItem>
					</Link>
				)}
				<ListItem onClick={handleLogout}>Logout</ListItem>
			</GroupList>
		</Box>
	);
};

export default UserMenu;
