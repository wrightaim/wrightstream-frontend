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
            <button className="button">
              Link Etsy
            </button>
            <button className="button">
              Link Shopify
            </button>
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