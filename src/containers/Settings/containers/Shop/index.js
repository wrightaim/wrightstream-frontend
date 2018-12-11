// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editShop } from '../../../../state/actions/shop';

// COMPONENTS
import DeleteShop from './components/DeleteShop';
import EditShopLogo from './components/EditShopLogo';
import DeleteShopLogo from './components/DeleteShopLogo';

// ==========

class Shop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      action: '',
      edit: false,
      shop_name: '',
      shop_username: '',
      shop_email: '',
    };
  };

  toggle = event => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action: event.target.id
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal',
        action: ''
      });
    }
  };

  editShop = async event => {
    event.preventDefault();  
    if (this.state.edit) {
      const { shop_name, shop_username, shop_email } = this.state;
      const shop = {shop_name: shop_name, name: shop_username, email: shop_email};
      await this.props.editShop(shop);
      if (!this.props.editShopError) {
        this.setState({edit: false});
      }
    } else {
      this.setState({edit: true});
    }  
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.shop_name) {
      this.setState({
        shop_name: this.props.shop.shop_name,
        shop_username: this.props.shop.name,
        shop_email: this.props.shop.email
      });
    }
  };

  render () {
    const shop = {
      name: this.props.shop.shop_name,
      username: this.props.shop.name,
      email: this.props.shop.email,
      logo: this.props.shop.logo
    };
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.editShop}>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                  <h1 className="title">Shop</h1>
                  </div>  
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button className="button is-primary is-outlined">
                      {!this.state.edit ? 'Edit' : 'Save'}
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="shop">
                <div className="columns">
                  <div className="column is-4">
                    <span>Shop Logo</span>
                  </div>
                  <div className="column is-8">
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <figure className="image">
                            <img className="logo" src={shop.logo} alt={shop.name} />
                          </figure>
                        </div>
                        <div className="level-item">
                          <div>
                            <p 
                              id="edit-shop-logo" 
                              className="button is-small is-fullwidth"
                              onClick={this.toggle}
                            >Change</p>
                            <p 
                              id="delete-shop-logo" 
                              className="button is-small is-fullwidth is-danger"
                              onClick={this.toggle}
                            >Delete</p>
                          </div>  
                        </div>
                      </div>
                    </div>           
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4">
                    <span>Shop Name</span>
                  </div>
                  <div className="column is-8">
                    {
                      !this.state.edit ? (
                        <span>{shop.name}</span>
                      ) : (
                        <div className="field">
                          <p className="control">
                            <input
                              className="input"
                              type="text"
                              id="shop_name"
                              value={this.state.shop_name}
                              onChange={event => this.setState({shop_name: event.target.value})}
                              required
                            />
                          </p>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4">
                    <span>Shop Username</span>
                  </div>
                  <div className="column is-8">
                    {
                      !this.state.edit ? (
                        <span>{shop.username}</span>
                      ) : (
                        <div>
                          <div className="field">
                            <p className="control">
                              <input
                                className="input"
                                type="text"
                                id="shop_username"
                                value={this.state.shop_username}
                                onChange={event => this.setState({shop_username: event.target.value})}
                                required
                              />
                            </p>
                          </div>                       
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4">
                    <span>Shop Email</span>
                  </div>
                  <div className="column is-8">
                    {
                      !this.state.edit ? (
                        <span>{shop.email}</span>
                      ) : (
                        <div className="field">
                          <p className="control">
                            <input
                              className="input"
                              type="text"
                              id="shop_username"
                              value={this.state.shop_email}
                              onChange={event => this.setState({shop_email: event.target.value})}
                              required
                            />
                          </p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </form>
            <hr />
            {
              this.props.editShopError ? (
                <p className="help is-danger has-text-centered has-padding-bottom">
                  Shop username or email already exists.
                </p>
              ) : null
            }
            <p className="has-text-right">
              <span 
                id="delete-shop" 
                className="menu-label has-text-danger pointer"
                onClick={this.toggle}
              >Delete Shop</span>
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
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                (() => {
                  switch (this.state.action) {
                    case 'delete-shop':
                      return <DeleteShop toggle={this.toggle} />;
                    case 'edit-shop-logo':
                      return <EditShopLogo shop={this.props.shop} toggle={this.toggle} />;
                    case 'delete-shop-logo':
                      return <DeleteShopLogo toggle={this.toggle} />;
                    default:
                      break;
                  }
                })()
              }
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
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
  editShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);