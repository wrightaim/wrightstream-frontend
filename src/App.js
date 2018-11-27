// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { getUser } from './state/actions/auth';

// COMPONENTS
import Header from './components/Header';

// CONTAINERS
import Login from './containers/Login';

// ==========

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>  
    );
  };
};

// const mapStateToProps = state => ({
//   user: state.auth.user,
//   authorized: state.auth.authorized
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getUser
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
