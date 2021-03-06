import React from 'react';
import { TextInput, View, Text } from 'react-native';

// propsien nimet voidaan keksiä itse, muista!
// eli kun label niminen propsi ilmestyy Inputiin, näkyy se textinä

//LoginForm siirtää state->propsit Tekstikentta.js fileen, minkä mukana
//tulee propseissa annetut arvot

const Tekstikentta = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	//secureTextEntry piilottaa tekstia
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

// flex tässä tapauksessa tilan (2+1=3) eli 2 on enemmän tilaa!
const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}

};


export { Tekstikentta };