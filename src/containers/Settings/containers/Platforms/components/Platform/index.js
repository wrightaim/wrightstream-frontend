// REACT
import React from 'react';

// ==========

class Platform extends React.Component {
  render () {
    const platform = {
      name: this.props.platform.name,
      logo: this.props.platform.logo,
      color: this.props.platform.color,
      url: this.props.platform.url
    };
    return (
      <div className="column is-4">
        <div className="card">
          <a href={platform.url} target="_blank">
            <div className="card-content" style={{backgroundColor: platform.color}}>
              <figure className="image">
                <img src={platform.logo} alt={platform.name} />
              </figure>
            </div>
          </a>
          <footer className="card-footer">
            <a className="card-footer-item">
              Link {platform.name}
            </a>
          </footer>
        </div>
      </div>
    );
  };
};

export default Platform;