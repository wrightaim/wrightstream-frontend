// REACT
import React from 'react';

// ==========

class Platform extends React.Component {
  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <a href={this.props.platform.url} target="_blank">
            <div className="card-content" style={{backgroundColor: this.props.platform.color}}>
              <figure className="image">
                <img src={this.props.platform.logo} alt={this.props.platform.name} />
              </figure>
            </div>
          </a>
          <footer className="card-footer">
            <a className="card-footer-item">
              Link {this.props.platform.name}
            </a>
          </footer>
        </div>
      </div>
    );
  };
};

export default Platform;