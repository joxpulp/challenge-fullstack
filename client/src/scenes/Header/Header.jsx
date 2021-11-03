import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Title } from '../../components/Title/Title';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { Image } from '../../components/Image/Image';
import cart from '../../services/svg/cart.svg';
import { useSelector } from 'react-redux';

function Header() {
	const {
		colors: { primary },
	} = useContext(ThemeContext);

	const { userData, logged} = useSelector((state) => state.auth);
	const { loading } = useSelector((state) => state.ui);

	useEffect(() => {
		localStorage.setItem('userData', JSON.stringify(userData));
	}, [userData])

	return (
		<Box
			as='header'
			height='60px'
			alignItems='center'
			px={['20px', '20px', '145px']}
			bg={primary}
			color='white'
			borderBottom='1px solid white'
		>
			<Link to='/'>
				<Title mr='20px' cursor='pointer'>
					Heki
				</Title>
			</Link>
			<Box as='nav' flex={1}>
				<GroupList flex={1} justifyContent='space-evenly'>
					<Link to='/'>
						<ListItem>Shop</ListItem>
					</Link>
					<Link to='/about'>
						<ListItem>About</ListItem>
					</Link>
					<Link to='/contact'>
						<ListItem>Contact</ListItem>
					</Link>
				</GroupList>
				<GroupList justifyContent='space-evenly'>
					<ListItem mr='20px'>
						<Image src={cart} />
					</ListItem>
					<Link to='/login'>
						<Box height='100%' alignItems='center'>
							{logged && <Image borderRadius='100%' width='20px' mr='10px' src={userData.avatar} />}
							<Link to='/profile'><ListItem>{logged ? userData.name : 'Login'}</ListItem></Link>
						</Box>
					</Link>
				</GroupList>
			</Box>
		</Box>
	);
}

export default Header;
