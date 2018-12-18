// REACT
import React from 'react';

// ROUTER
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// REDUX
import {connect} from 'react-redux';

// COMPONENTS
import Header from './components/Header';
// import CallbackEtsy from './components/CallbackEtsy';

// CONTAINERS
import Login from './containers/Login';
import Signup from './containers/Signup';
import Settings from './containers/Settings';
// import Products from './containers/Products';
// import Inventory from './containers/Inventory';
// import WorkStream from './containers/WorkStream';
// import MyStream from './containers/MyStream';
// import Profile from './containers/Profile';
// import Admin from './containers/Admin';

// ==========

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header toggle={this.toggle} />
          {
            this.props.authorized ? (
              <Switch>
                {this.props.user.role_id === 1 ? <Route path="/settings" component={Settings} /> : null}
                {/* <Route path="/profile" component={Profile} />
                <Route path="/products" component={Products} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/workstream" component={WorkStream} />
                <Route path="/mystream" component={MyStream} />
                <Route path="/admin" component={Admin} />
                <Route path="/auth/callback/etsy" component={CallbackEtsy} /> */}
                <Route path="/" component={() => <Redirect to="/workstream" />} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={() => <Redirect to="/login" />} />
              </Switch>
            )
          }
          <div className={this.state.modalClasses}>
            <div className="modal-background" onClick={this.toggle}></div>
            <div className="modal-content modal-form">
              <div className="modal-container">
                uh
            </div>
            </div>
            <span className="modal-close is-large" onClick={this.toggle}></span>
          </div>
        </div>
      </BrowserRouter>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

export default connect(mapStateToProps, null)(App);