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
          <div className="card-content">
            <div className="columns">
              <div className="column is-3">
                <figure className="image">
                  <img src={platform.logo} alt={platform.name} />
                </figure>
              </div>
              <div className="column is-6" style={{backgroundColor: platform.color}}>
                {platform.name}
              </div>
              <div className="column is-3">
                <a href={platform.url} target="_blank">
                  <i className="fas fa-toggle-off"></i>
                </a>      
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Platform;