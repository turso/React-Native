import React, { Component } from 'react';
import { Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// hae kaikki minulle kansiosta ja kutsu niitä actions
import * as actions from '../actions';

class ListItem extends Component {
	
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { kirjasto, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
					{kirjasto.description}
					</Text>
				</CardSection>
			);
		}
	}


	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.kirjasto;
		// katsotaan, että listan asiat tulevat yksittäisinä objekteina lokiin
		console.log(this.props);

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		); 
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

// Reduxin metodi jonka avulla toimintaan react<->reduxin välillä
// ownProps = ListItem
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.kirjasto.id;

//	return { selectedLibraryId: state.selectedLibraryId };
	return { expanded };
};

// Component->Action creator->Action->Reducer dataflow

export default connect(mapStateToProps, actions)(ListItem);
