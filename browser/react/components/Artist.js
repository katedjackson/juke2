import React, {Component} from 'react';
import {Link} from 'react-router';
import Songs from '../components/Songs';
import Albums from '../components/Albums';

export default class Artist extends Component {

    componentDidMount () {
      const artistId = this.props.routeParams.artistId;
      const selectArtist = this.props.selectArtist;

      selectArtist(artistId);
    }

    render() {
      const artist = this.props.artist;
      const children = this.props.children;
      const propsToPassToChildren = {
        albums: this.props.artist.albums,
        songs: this.props.artist.songs,
        currentSong: this.props.currentSong,
        isPlaying: this.props.isPlaying,
        toggle: this.props.toggleOne
      }

      return (
        <div>
          <h3>{artist.name}</h3>
          <ul className="nav nav-tabs">
              <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
              <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
            </ul>
            { children && React.cloneElement(children, propsToPassToChildren) }
        </div>
      );
  }

}
