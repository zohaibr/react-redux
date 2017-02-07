'use strict';
import React from 'react';

// class Albums extends React.Component {
//   constructor(props) {
//   super(props);
// }
// It can also be written as class Albums extends React.Component { render() return}
function Albums(props) {
  return (

  <div className="col-xs-10">
  <h3>Albums</h3>
    <div className="row">
    {props.albums.map(album => {
     return <div className="col-xs-4" key={album.id}>
      <a className="thumbnail" href="#">
        <img src={album.imageUrl}/>
        <div className="caption">
          <h5>
            <span>{album.name}</span>
          </h5>
          <small>{album.songs.length}</small>
        </div>
      </a>
    </div>
    })}
    </div>
  </div>
  );
}

export default Albums;
