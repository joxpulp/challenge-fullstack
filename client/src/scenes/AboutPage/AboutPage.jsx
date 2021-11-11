import React from 'react';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { Section } from '../../components/Section/Section';
import MainBase from '../../components/MainBase/MainBase';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';

function AboutPage() {
	return (
		<MainBase>
			<DescriptionSection>
				<Title>About Us</Title>
				<Text>Wanna know more about us?.. this is the page</Text>
			</DescriptionSection>
		</MainBase>
	);
}

export default AboutPage;
