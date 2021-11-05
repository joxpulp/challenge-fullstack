import React from 'react'
import { Box } from '../Box/Box';
import { Image } from '../Image/Image';
import { Text } from '../Text/Text';
import empty from '../../services/svg/emptycart.svg'

function NoResults({children}) {
    return (
			<Box
				height='100vh'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				<Image mb='20px' width={['70%', '70%', '30%']} src={empty} />
				<Text>{children}</Text>
			</Box>
		);
}

export default NoResults
