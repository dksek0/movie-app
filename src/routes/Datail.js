import React from 'react';

class Datail extends React.Component {
  componentDidMount () {
    const {location, history} = this.props;
    if (location.state === undefined) {
      history.push("/")
    }
  }
  render () {
    const {location} = this.props;
    if (location.state) {
      return (
        <div>
          <h3>{location.state.title}</h3>
          <h5>{location.state.year}</h5>
          <ul>
            {location.state.genres.map((genre, index) =>
              <li key={index}>{genre}</li>
            )}
          </ul>
          <img alt={location.state.title} title={location.state.title} src={location.state.poster} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Datail;