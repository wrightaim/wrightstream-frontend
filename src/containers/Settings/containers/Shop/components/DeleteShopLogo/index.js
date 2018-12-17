// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editShop} from '../../../../../../state/actions/shop';

// ==========

class DeleteShopLogo extends React.Component {
  deleteShopLogo = async event => {
    event.preventDefault();
    const shop = {logo: null};
    await this.props.editShop(shop);
    this.props.toggle();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.deleteShopLogo}>
        <p>Are you sure you want to delete your shop logo?</p>
        <div className="buttons">
          <span className="button" onClick={this.props.toggle}>Cancel</span>
          <button className="button is-danger">Delete</button>
        </div>
      </form>     
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShopLogo);