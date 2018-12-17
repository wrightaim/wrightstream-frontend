// REACT
import React from 'react';

// REDUX
import {connect} from 'react-redux';

// COMPONENTS
import EditShop from './components/EditShop';
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
      action: ''
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
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                <h1 className="title">Shop</h1>
                </div>  
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="button is-primary is-outlined" id="edit-shop" onClick={this.toggle}>Edit</span>
                </div>
              </div>
            </div>
            <hr />
            <div id="shop">
              <div className="columns">
                <div className="column is-4">
                  <span>Shop Logo</span>
                </div>
                <div className="column is-8">
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <figure className="image shop-logo">
                          {
                            shop.logo ? (
                              <img src={shop.logo} alt={shop.name} />
                            ) : (
                              <span className="lnr lnr-store"></span>
                            )
                          }
                        </figure>
                      </div>
                      <div className="level-item">
                        <div>
                          <p className="button is-small is-fullwidth" id="edit-shop-logo" onClick={this.toggle}>Change</p>
                          <p className="button is-small is-fullwidth is-danger" id="delete-shop-logo" onClick={this.toggle}>Delete</p>
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
                  <span>{shop.name}</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4">
                  <span>Shop Username</span>
                </div>
                <div className="column is-8">
                  <span>{shop.username}</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4">
                  <span>Shop Email</span>
                </div>
                <div className="column is-8">
                  <span>{shop.email}</span>
                </div>
              </div>
            </div>
            <hr />           
            <p className="has-text-right">
              <span className="menu-label has-text-danger pointer" id="delete-shop" onClick={this.toggle}>Delete Shop</span>
            </p>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                (() => {
                  switch (this.state.action) {
                    case 'edit-shop':
                      return <EditShop shop={this.props.shop} toggle={this.toggle} />;
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
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

export default connect(mapStateToProps, null)(Shop);