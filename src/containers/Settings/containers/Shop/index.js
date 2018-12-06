// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getShop } from '../../../../state/actions/shop';

// ==========

class Shop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  };

  componentDidMount = async () => {
    this.props.getShop();
  };

  render () {
    return (
      <div className="card">
        <div className="card-content">
          <h1 className="title is-5">Shop</h1>
          <figure className="image">
            <img className="shop-img" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
          </figure>
          <aside className="menu">
            <ul className="menu-list">
              <li>
                <span className="fa-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                {this.props.shop.shop_name}
              </li>
              <li>
                <span className="fa-icon">
                  <i className="fas fa-user"></i>
                </span>
                {this.props.shop.name}
              </li>
              <li>
                <span className="fa-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                {this.props.shop.email}
              </li>    
              <li>
                <span className="fa-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                {this.props.shop.created_at}
              </li>          
            </ul>
          </aside>
          <hr />
          <button className="button is-primary is-outlined is-fullwidth">Edit Shop</button>
          <br />
          <button className="button is-danger is-fullwidth">Delete Shop</button>
        </div>
        {/* <div className="card">
              <div className="card-content">
                <h1 className="title is-5">Store Integrations</h1>
                <button className="button">
                  Link Etsy
                </button>
                <button className="button">
                  Link Shopify
                </button>
              </div>
            </div> */}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
