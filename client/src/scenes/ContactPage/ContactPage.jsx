import React from 'react';
import { Box } from '../../components/Box/Box';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import MainBase from '../../components/MainBase/MainBase';
import { Section } from '../../components/Section/Section';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function ContactPage() {
	
	return (
		<MainBase>
			<DescriptionSection>
				<Title>Contact Us</Title>
				<Text>We are here to help!</Text>
			</DescriptionSection>
		</MainBase>
	);
}

export default ContactPage;
