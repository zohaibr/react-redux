'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Albums from './albums.js'
import axios from 'axios';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albums: []};
  }
  render() {
     return (
      <Albums albums = {this.state.albums}/>
    );
  }

  componentDidMount() {
    const logError = console.error.bind(console);

    axios.get('api/albums')
      .then(res => res.data)
      .then(albumsFromServer => {
        albumsFromServer = albumsFromServer.map(album => {
          album.imageUrl = `/api/albums/${album.id}/image`;
          return album;
        });
        this.setState({ albums: albumsFromServer });
      })
      .catch(logError);
    }
}




// <div id="main" className="container-fluid"
