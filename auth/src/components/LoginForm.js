import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Tekstikentta, Spinner } from './common';


class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };
	// tarvitaan state, jotta voidaan ottaa tieto talteen
	// TextInput->kirjoitus->onChangeText aktivoituu kun kirjoitetaan
	// tekstin kanssa. -> setState kutsutaan, jotta uusi State sisältää tekstin
	// tapahtuu sillä että ohjelma renderoituu uudestaan ja value = state.email
	
	// authenticoidaan useri firebase metodilla
	// email password saatu statesta
	onButtonPress() {
		const { email, password } = this.state;

		// tehdään sitä varten, että state pyyhitään pois, jotta error
		// message voidaan pyyhkiä pois, kun tulee oikea login
		this.setState({ error: '', loading: true });

		// yrittää signata sisään. Jos ei toimi niin catch ja uusi tili
		// jos sekää ei toimi niin error! ja näyttää sen this.state.error
		firebase.auth().signInWithEmailAndPassword(email, password)
		// koska ei tiedetä milloin tätä kutsutaan, täytyy funktio .bind(this)
		.then(this.onLoginSucess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSucess.bind(this))
				.catch(this.onLoginFail.bind(this));			
		});
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	// korvataan loading messaget pois ja pyyhitään formi tyhjäski
	onLoginSucess() {
		this.setState({ 
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	// katsotaan onko näytöllä nappi vai spinner merkki
	// eka tarkistus on this.state.loading === true , koska boolean
	renderButton() {
		if (this.state.loading) {
			return <Spinner koko="small" />;
		}
		return (
			<Button Painallus={this.onButtonPress.bind(this)}>	
				Log in
			</Button>
		);
	}

	render() {
		return ( 
			<Card>
				<CardSection>
					<Tekstikentta
					placeholder="user@gmail.com"
					label="Email"
					value={this.state.email} 
					onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
			
				<CardSection>
					<Tekstikentta
					secureTextEntry 
					placeholder="password"
					label="Password"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
