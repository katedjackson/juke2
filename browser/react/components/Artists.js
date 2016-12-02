import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Artists extends Component {

  render() {
    const artists = this.props.artists;

    return (
      <div>
        <h3>Artists</h3>
        <table className='table'>
          <thead>
          </thead>
          <tbody>
          {
            artists.map(artist => (
              <tr key={ artist.id }>
                <td>
                  <Link to={`/artists/${artist.id}`}>
                    <span>{ artist.name }</span>
                  </Link>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}
