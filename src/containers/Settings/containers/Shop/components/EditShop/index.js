// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editShop, editShopReset} from '../../../../../../state/actions/shop';

// ==========

class EditShop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shop_name: this.props.shop.shop_name,
      shop_username: this.props.shop.name,
      shop_email: this.props.shop.email
    };
  };

  editShop = async event => {
    event.preventDefault();
    const {shop_name, shop_username, shop_email} = this.state;
    const shop = {shop_name: shop_name, name: shop_username, email: shop_email};
    await this.props.editShop(shop);
    if (!this.props.editShopError) this.props.toggle();
  };

  componentDidMount () {
    this.props.editShopReset();
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <form className="has-text-centered" onSubmit={this.editShop}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="shop_name"
                  placeholder="Shop Name"
                  value={this.state.shop_name}
                  onChange={event => this.setState({shop_name: event.target.value})}
                  required
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="shop_username"
                  placeholder="Shop Username"
                  value={this.state.shop_username}
                  onChange={event => this.setState({shop_username: event.target.value})}
                  required
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="shop_email"
                  placeholder="Shop Email"
                  value={this.state.shop_email}
                  onChange={event => this.setState({shop_email: event.target.value})}
                  required
                />
              </p>
            </div>
            {
              this.props.editShopError ? (
                <p className="help is-danger has-text-centered">
                  Shop username or email already exists.
                </p>
              ) : null
            }
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
  shop: state.shop.shop,
  editShopError: state.shop.editShopError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editShop,
  editShopReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditShop);