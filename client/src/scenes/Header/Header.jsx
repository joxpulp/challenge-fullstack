import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMenu } from '../../reducers/ui/uiReducer';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Title } from '../../components/Title/Title';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { Text } from '../../components/Text/Text';
import { Image } from '../../components/Image/Image';
import cart from '../../services/svg/cart.svg';
import UserMenu from '../UserMenu/UserMenu';

function Header() {
	const {
		colors: { primary },
	} = useContext(ThemeContext);

	const dispatch = useDispatch();
	const { userData, loggedIn } = useSelector((state) => state.auth);
	const { cartData, totalItems } = useSelector((state) => state.cart);
	const { userMenu } = useSelector((state) => state.ui);

	useEffect(() => {
		localStorage.setItem('userData', JSON.stringify(userData));
	}, [userData]);

	useEffect(() => {
		localStorage.setItem('cartData', JSON.stringify(cartData));
	}, [cartData]);

	const handleUserMenu = () => {
		dispatch(setUserMenu(false));
	};

	return (
		<Box
			position='relative'
			as='header'
			height='60px'
			alignItems='center'
			px={['20px', '20px', '145px']}
			bg={primary}
			color='white'
			borderBottom='1px solid white'
		>
			<Link to='/' onClick={handleUserMenu}>
				<Title mr='20px' cursor='pointer'>
					Heki
				</Title>
			</Link>
			<Box as='nav' flex={1}>
				<GroupList flex={1} justifyContent='space-evenly'>
					<Link to='/' onClick={handleUserMenu}>
						<ListItem>Shop</ListItem>
					</Link>
					<Link to='/about' onClick={handleUserMenu}>
						<ListItem>About</ListItem>
					</Link>
					<Link to='/contact' onClick={handleUserMenu}>
						<ListItem>Contact</ListItem>
					</Link>
				</GroupList>
				<GroupList justifyContent='space-evenly'>
					<Link to='/cart'>
						<Box alignItems='center' mr='20px' onClick={handleUserMenu}>
							<Image mr='5px' src={cart} />
							<Text>{loggedIn && cartData.length !== 0 && totalItems}</Text>
						</Box>
					</Link>
					<Box height='100%' alignItems='center'>
						{loggedIn ? (
							<Box onClick={() => dispatch(setUserMenu(!userMenu))}>
								<Image
									borderRadius='100%'
									width='20px'
									mr='10px'
									src={userData.avatar}
									alt='avatar'
								/>
								<ListItem>{userData.name}</ListItem>
							</Box>
						) : (
							<Link to='/login'>
								<ListItem>Login</ListItem>
							</Link>
						)}
					</Box>
				</GroupList>
				{userMenu && <UserMenu />}
			</Box>
		</Box>
	);
}

export default Header;
