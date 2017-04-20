import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
 state = { albums: [] };


 // tehty sitä varten, että kun sivu käynnistyy niin jotain täytyy ladata
 componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ albums: response.data }));
 }

 // renderoi näkyväksi albumit json-datasta
 renderAlbums() {
  return this.state.albums.map(album => 
   <AlbumDetail key={album.title} albumit={album} />
   );
 }

 render() {
 console.log(this.state);

	return (
	<ScrollView>
		{this.renderAlbums()}
	</ScrollView>
	);
 }
}

export default AlbumList;
