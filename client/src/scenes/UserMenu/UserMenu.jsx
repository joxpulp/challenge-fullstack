import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { logout } from '../../redux/reducers/authReducer';
import { clearSuccessMsg, setUserMenu } from '../../redux/reducers/uiReducer';

const UserMenu = () => {
	const dispatch = useDispatch();
	const { userData } = useSelector((state) => state.auth);
	const { errorMsg } = useSelector((state) => state.ui);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(setUserMenu(false));
		dispatch(clearSuccessMsg());
	};

	if (errorMsg) {
		return <Redirect to='/login' />;
	}

	return (
		<Box
			position='absolute'
			width='100px'
			alignItems='center'
			right={['10px', '10px', '110px']}
			top='5'
			justifyContent='center'
			bg='#1d1d1dfd'
			color='#e4e4e4'
			height='160px'
			boxShadow='0px 0px 5px 2px #636363'
		>
			<GroupList display='flex' flexDirection='column' alignItems='center'>
				<Link to='/profile' onClick={() => dispatch(setUserMenu(false))}>
					<ListItem mb='20px'>Edit User</ListItem>
				</Link>
				<Link to='/purchases' onClick={() => dispatch(setUserMenu(false))}>
					<ListItem mb='20px'>Purchases</ListItem>
				</Link>
				{userData.isAdmin && (
					<Link to='/adminpanel' onClick={() => dispatch(setUserMenu(false))}>
						<ListItem mb='20px'>Admin Panel</ListItem>
					</Link>
				)}
				<ListItem onClick={handleLogout}>Logout</ListItem>
			</GroupList>
		</Box>
	);
};

export default UserMenu;
