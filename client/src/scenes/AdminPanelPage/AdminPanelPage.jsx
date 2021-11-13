import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../reducers/products/productsReducer';
import { Title } from '../../components/Title/Title';
// import { Button } from '../../components/Button/Button';
import MainBase from '../../components/MainBase/MainBase';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import GridSection from '../../components/GridSection/GridSection';
import AdProductCard from '../AdProductCard/AdProductCard';
import { ButtonBase } from '../../components/Button/ButtonBase/ButtonBase';

function AdminPanelPage() {
	const history = useHistory();

	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<MainBase>
			<DescriptionSection>
				<Title mb='20px'>Admin Panel (Add, Edit and Delete Products)</Title>
				<ButtonBase onClick={() => history.push('/adminpanel/add')} width='150px'>
					Add Product
				</ButtonBase>
			</DescriptionSection>
			<GridSection>
				{products.map((product, index) => (
					<AdProductCard
						key={index}
						id={product._id}
						name={product.name}
						price={product.price}
						thumbnail={product.thumbnail}
					/>
				))}
			</GridSection>
		</MainBase>
	);
}

export default AdminPanelPage;
