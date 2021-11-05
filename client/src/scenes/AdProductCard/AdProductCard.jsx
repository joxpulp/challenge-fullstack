import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Image } from '../../components/Image/Image';
import { Title } from '../../components/Title/Title';
import { clearProduct, deleteProduct } from '../../redux/reducers/productsReducer';

function AdProductCard({ name, thumbnail, id}) {

    const history = useHistory();
	const dispatch = useDispatch()

    const handleEdit = () => {
        history.push(`adminpanel/productedit/${id}`);
		dispatch(clearProduct())
    }

	return (
		<Box
			border='1px solid #e7e7e7'
			borderRadius='5px'
			overflow='hidden'
			flexDirection='column'
			width='100%'
			alignItems='center'
		>
			<Image width='100%' src={thumbnail} alt='productImg' />
			<Title my='15px'>{name}</Title>
			<Box my='15px'>
				<Button onClick={handleEdit} mr='10px'>Edit</Button>
				<Button onClick={() => dispatch(deleteProduct(id))}>Delete</Button>
			</Box>
		</Box>
	);
}

export default AdProductCard;
