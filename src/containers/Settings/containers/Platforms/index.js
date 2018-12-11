// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
//import DeleteShop from './components/DeleteShop';
//import EditShopLogo from './components/EditShopLogo';
//import DeleteShopLogo from './components/DeleteShopLogo';

// ==========

class Platforms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
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
                <div className="column is-4">
                  <div className="card">
                    <div className="card-content">
                      <figure className="image">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/etsy-logo-black-and-white.png" alt="Etsy" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a className="card-footer-item">
                        Link Etsy
                    </a>
                    </footer>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="card">
                    <div className="card-content">
                      <figure className="image">
                        <img src="http://pluspng.com/img-png/shopify-logo-png-shopify-logo-300.png" alt="Shopify" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a className="card-footer-item">
                        Link Shopify
                    </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
  };
};

const mapStateToProps = state => ({
//  shop: state.shop.shop,
//  editShopError: state.shop.editShopError
});

const mapDispatchToProps = dispatch => bindActionCreators({
//  editShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Platforms);