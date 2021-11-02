import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Title } from '../../components/Title/Title';
import { GroupList } from '../../components/GroupList/GroupList';
import { ListItem } from '../../components/ListItem/ListItem';
import { Image } from '../../components/Image/Image';
import cart from '../../services/svg/cart.svg';

function Header() {
	const {
		colors: { primary },
	} = useContext(ThemeContext);

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
						<ListItem>Login</ListItem>
					</Link>
				</GroupList>
			</Box>
		</Box>
	);
}

export default Header;
