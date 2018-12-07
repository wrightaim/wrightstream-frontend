// REACT
import React from 'react';

// ==========

class Shop extends React.Component {
  render () {
    return (
      <div className="card">
        <div className="card-content">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
               <h1 className="title">Shop</h1>
              </div>  
            </div>
            <div className="level-right">
              <div className="level-item">
               <button className="button is-primary is-outlined is-fullwidth">Edit</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="shop">
            <div className="columns">
              <div className="column is-4">
                Shop Logo
              </div>
              <div className="column is-8">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <figure className="image">
                        <img className="logo" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
                      </figure>
                    </div>
                    <div className="level-item">
                      <div>
                        <button className="button is-small is-fullwidth">Change</button>
                        <button className="button is-small is-fullwidth is-danger">Delete</button>
                      </div>  
                    </div>
                  </div>
                </div>           
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                Shop Name
              </div>
              <div className="column is-8">
                {this.props.shop.shop_name}
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                Shop Username
              </div>
              <div className="column is-8">
                {this.props.shop.name}
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                Shop Email
              </div>
              <div className="column is-8">
                {this.props.shop.email}
              </div>
            </div>
          </div>
          <hr />
          <p className="has-text-right">
            <a href="/" className="menu-label has-text-danger">Delete shop</a>
          </p>     
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

export default Shop;