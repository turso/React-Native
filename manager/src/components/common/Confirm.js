import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			// tarvitaan android laitteille, joten lähetetään vaan tyhjä <funktio></funktio>
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>
						{children}
					</Text>
				</CardSection>

				<CardSection>
					<Button Painallus={onAccept}>Yes</Button>
					<Button Painallus={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.65)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };
