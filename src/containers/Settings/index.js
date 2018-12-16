// REACT
import React from 'react';

// ROUTER
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getShop} from '../../state/actions/shop';

// COMPONENTS
import Sidebar from './components/Sidebar';

// CONTAINERS
import Shop from './containers/Shop';
import Staffs from './containers/Staffs';
import Platforms from './containers/Platforms';

// HELPERS
const moment = require('moment');

// ==========

class Settings extends React.Component {
  componentDidMount = async () => {
    this.props.getShop();
  };

  render () {
    return (
      <BrowserRouter>
        <div id="settings">
          <section>
            <div className="columns is-fullheight is-marginless">
              <div className="column is-3 bar">
                <Sidebar />
              </div>
              <div className="column is-9 content-container">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <figure className="image">
                        <img className="logo-small" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
                      </figure>
                    </div>
                    <div className="level-item">
                      <div>
                        <h1 className="title-alt is-3">{this.props.shop.shop_name}</h1>
                        <p className="subtitle-alt menu-label">Joined {moment(this.props.shop.created_at).format('MMMM D, YYYY')}</p>
                      </div>
                    </div>
                  </div>       
                </div>
                <Switch>
                  <Route exact path="/settings" render={(props) => <Shop shop={this.props.shop} {...props} />} />
                  <Route path="/settings/staff" component={Staffs} />
                  <Route path="/settings/platforms" component={Platforms} />
                </Switch>                          
              </div>
            </div>
          </section>
        </div>    
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