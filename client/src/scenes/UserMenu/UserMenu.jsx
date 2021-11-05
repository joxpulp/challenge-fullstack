import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { logout } from '../../redux/reducers/authReducer';
import { clearErrorMsg, clearSuccessMsg, setUserMenu } from '../../redux/reducers/uiReducer';

const UserMenu = () => {

    const dispatch = useDispatch()
	
	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearSuccessMsg())
		dispatch(clearErrorMsg())
	}

	return (
		<Box
			position='absolute'
			width='100px'
			alignItems='center'
			right='110px'
			top='5'
			justifyContent='center'
			bg='#1d1d1dfd'
			color='#e4e4e4'
			height='150px'
			boxShadow='0px 0px 5px 2px #636363'
		>
			<GroupList display='flex' flexDirection='column' alignItems='center'>
				<Link to='/profile' onClick={() => dispatch(setUserMenu(false))}>
					<ListItem mb='20px'>Edit User</ListItem>
				</Link>
				<Link to='/purchases' onClick={() => dispatch(setUserMenu(false))}>
					<ListItem mb='20px'>Purchases</ListItem>
				</Link>
				<ListItem onClick={handleLogout}>Logout</ListItem>
			</GroupList>
		</Box>
	);
};

export default UserMenu;
