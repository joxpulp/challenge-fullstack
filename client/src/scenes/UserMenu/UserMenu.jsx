import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { logout } from '../../redux/reducers/authReducer';
import { setUserMenu } from '../../redux/reducers/uiReducer';

const UserMenu = () => {

    const dispatch = useDispatch()

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
			height='100px'
			boxShadow='0px 0px 5px 2px #636363'
		>
			<GroupList display='flex' flexDirection='column' alignItems='center'>
				<Link to='/profile' onClick={() => dispatch(setUserMenu(false))}>
					<ListItem mb='20px'>Edit User</ListItem>
				</Link>
				<ListItem onClick={() => dispatch(logout())}>Logout</ListItem>
			</GroupList>
		</Box>
	);
};

export default UserMenu;
