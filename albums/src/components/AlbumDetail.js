import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumit }) => {
	const { title, artist, thumbnail_image, image, url } = albumit;
	const { thumbnailStyle, 
		tyylitHeaderille, 
		thumbnailContainerStyle,
		headerTekstityyli,
		imageTyyli
		} = styles;


	return (
		<Card>
		<CardSection>
			<View style={thumbnailContainerStyle}>
				<Image 
				style={thumbnailStyle}
				source={{ uri: thumbnail_image }} 
				/>
			</View>
			<View style={tyylitHeaderille}>
				<Text style={headerTekstityyli}>{title}</Text>
				<Text>{artist}</Text>
			</View>
		</CardSection>

		<CardSection>
			<Image 
			style={imageTyyli}
			source={{ uri: image }} 
			/>
		</CardSection>

		<CardSection>
			<Button Painallus={() => Linking.openURL(url)}>
				Buy Now
			</Button>
		</CardSection>
		</Card>
	);
};


const styles = {
	tyylitHeaderille: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTekstityyli: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageTyyli: {
		height: 300,
		flex: 1,
		width: null
	}
};


export default AlbumDetail;
