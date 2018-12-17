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

  editShopLogo = async event => {
    event.preventDefault();
    const {shop_logo} = this.state;
    const shop = {logo: shop_logo};
    await this.props.editShop(shop);
    this.props.toggle();
  };

  render () {
    const shop = {
      name: this.props.shop.shop_name,
      logo: this.props.shop.logo
    };
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <form className="has-text-centered" onSubmit={this.editShopLogo}>
            <figure className="image shop-logo-large">
              {
                shop.logo ? (
                  <img src={shop.logo} alt={shop.name} />
                ) : (
                  <span className="lnr lnr-store"></span>
                )
              }
            </figure>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="shop_logo"
                  placeholder="Logo URL"
                  value={this.state.logo}
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