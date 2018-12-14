// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editShop} from '../../../../../../state/actions/shop';

// ==========

class EditShopLogo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shop_logo: ''
    };
  };

  editShopLogo = event => {
    event.preventDefault();
    const {shop_logo} = this.state;
    const shop = {logo: shop_logo};
    this.props.editShop(shop);
    this.props.toggle();
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <form className="has-text-centered" onSubmit={this.editShopLogo}>
            <figure className="image has-padding-bottom">
              <img className="logo-large" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
            </figure>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="shop_logo"
                  placeholder="Logo URL"
                  value={this.state.shop_logo}
                  onChange={event => this.setState({shop_logo: event.target.value})}
                  required
                />
              </p>
            </div>
            <div className="buttons">
              <span className="button" onClick={this.props.toggle}>Cancel</span>
              <button className="button is-success">Save</button>
            </div>
          </form>
        </div>
      </div>    
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditShopLogo);