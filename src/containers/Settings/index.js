// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getShop } from '../../state/actions/shop';

// COMPONENTS
import Sidebar from './components/Sidebar';

// ==========

class Settings extends React.Component {
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
      <BrowserRouter>
        <section className="products">
          <div className="columns is-fullheight is-marginless">
            <div className="column is-3 bar">
              <Sidebar />
            </div>
            <div className="column is-9 products-content">
              <div className="products-container">
                {/* <Switch>
                  <Route exact path="/products" component={Main} />
                  <Route path="/products/items" component={Items} />
                  <Route path="/products/bundles" component={Bundles} />
                </Switch> */}
                <section className="settings">
                  <figure className="image">
                    <img className="shop-img" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
                  </figure>
                  <h1 className="title is-3 has-text-centered">{this.props.shop.shop_name}</h1>
                  <p className="subtitle menu-label has-text-centered">
                    Member since {this.props.shop.created_at}
                  </p>
                  <hr />
                  <div className="container">
                    <div className="columns">
                      <div className="column is-4">
                        <div className="card">
                          <div className="card-content">
                            <h1 className="title is-5">Shop Information</h1>
                            <aside className="menu">
                              <ul className="menu-list">
                                <li>
                                  <span className="fa-icon">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                  email
                                </li>
                                <li>
                                  <span className="fa-icon">
                                    <i className="fas fa-user"></i>
                                  </span>
                                  owner
                                </li>
                              </ul>
                              <p className="profile-bio">
                                Lorem ipsum stuff
                              </p>
                            </aside>
                            <hr />
                            <button className="button is-primary is-outlined is-fullwidth">Edit Shop</button>
                            <br />
                            <button className="button is-danger is-fullwidth">Delete Shop</button>
                          </div>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card">
                          <div className="card-content">
                            <h1 className="title is-5">Store Integrations</h1>
                            <button className="button">
                              Link Etsy
                            </button>
                            <button className="button">
                              Link Shopify
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
