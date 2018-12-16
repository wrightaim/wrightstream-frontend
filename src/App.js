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
  render () {
    console.log(this.props.user);
    return (
      <BrowserRouter>
        <div>
          <Header />
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