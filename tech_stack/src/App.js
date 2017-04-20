import React from 'react';
import { View } from 'react-native';

// reduxiin libeja
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// haetaan index.js kansiosta
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// npm install --save-dev eslint-config-rallycoding

const App = () => {
	return (
	<Provider store={createStore(reducers)}>
		<View style={{ flex: 1 }}>
			<Header headeri="Tech Stack" />
			<LibraryList />
		</View>
	</Provider>
	);
};

export default App;
