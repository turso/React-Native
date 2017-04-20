import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

// tavoitteena saada console.logiin mapStateProps kautta muutettu
// state lista näkyviin
class LibraryList extends Component {
	
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.kirjastot);
	}

	// yksittäisen rivin käsittely jossa luodaan propsi kirjasto, mitä kutsutaan
	// ListItem filessä
	renderRow(kirjastot) {
		return <ListItem kirjasto={kirjastot} />;
	}

	render() {
		console.log(this.props);
		return (
			<ListView
			dataSource={this.dataSource}
			renderRow={this.renderRow}
			/>	
		);
	}
}


//saadaan dataa LibraryReducer -> LibraryListin kautta
const mapStateToProps = state => {
	return { kirjastot: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

// reduxi stateen käydään käsiksi hieman eri tavalla, kuin reactiin
// connect tarvitaan sitä varten! Eli kutsutaan connect() funktiota, jonka
// jälkeen sitä kutsutaan uudestaan (LibraryList) funktiolla
