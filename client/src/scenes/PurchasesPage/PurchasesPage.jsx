import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../reducers/cart/cartReducer';
import { getPurchase } from '../../reducers/purchase/purchaseReducer';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import MainBase from '../../components/MainBase/MainBase';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import GridSection from '../../components/GridSection/GridSection';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import NoResults from '../../components/NoResults/NoResults';

function PurchasesPage() {
	const dispatch = useDispatch();
	const { purchases } = useSelector((state) => state.purchase);

	useEffect(() => {
		dispatch(getPurchase());
		dispatch(getCart());
	}, [dispatch]);

	if (purchases.length === 0) {
		return <NoResults>You dont have any purchases</NoResults>;
	}

	return (
		<MainBase>
			<DescriptionSection>
				<Title>Your Purchases</Title>
				<Text>Your history of purchases in one place</Text>
			</DescriptionSection>
			<GridSection>
				{purchases.map((product, index) => (
					<PurchaseCard
						key={index}
						name={product.name}
						price={product.price}
						thumbnail={product.thumbnail}
					/>
				))}
			</GridSection>
		</MainBase>
	);
}

export default PurchasesPage;
