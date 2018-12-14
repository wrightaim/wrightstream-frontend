// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPlatforms} from '../../../../state/actions/shop';

// COMPONENTS
import Platform from './components/Platform';

// ==========

class Platforms extends React.Component {
  componentDidMount () {
    this.props.getPlatforms();
  };

  render () {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h1 className="title">Platforms</h1>
            <hr />
            <div id="platforms">
              <div className="columns">
                {
                  this.props.platforms.map((platform, i) => {
                    return (
                      <Platform key={i} platform={platform} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
  };
};

const mapStateToProps = state => ({
  platforms: state.shop.platforms
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlatforms
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Platforms);