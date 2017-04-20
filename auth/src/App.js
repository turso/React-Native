import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };


	componentWillMount() {
		firebase.initializeApp({
    	apiKey: "AIzaSyC2V5ffEWmQNQ5QPeCrOZekQjV9c6ynNSU",
    	authDomain: "auth-14f14.firebaseapp.com",
    	databaseURL: "https://auth-14f14.firebaseio.com",
    	storageBucket: "auth-14f14.appspot.com",
    	messagingSenderId: "506462866532"
  		});

		// käytetään tätä tietääkseen, onko user signed in vai out?
		// eli onko arvoa vai null?
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	// tehty sitä varten, että kun logataan aluksi näkyy spinner sen aikaa
	// kun firebase loadaa databasea, jos user == true, tulee nappi
	// jos false. LoginForm
	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
					<Button Painallus={() => firebase.auth().signOut()}>
					Log Out
					</Button>
					</CardSection>
					);
			case false:
				return <LoginForm />;
			default:
				return <Spinner koko="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headeri="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
