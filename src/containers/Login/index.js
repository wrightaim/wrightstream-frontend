// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../state/actions/auth';

// ==========

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shop_username: '',
      email: '',
      password: ''
    };
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render () {
    return (
      <div id="login">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4-desktop is-offset-4-desktop">
                  <div className="card">
                    <div className="card-content">
                      <form onSubmit={this.login}>
                        <div className="field">
                          <p className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="Shop Username"
                              id="shop_username"
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
                              type="email"
                              placeholder="Email"
                              id="email"
                              value={this.state.email}
                              onChange={event => this.setState({email: event.target.value})}
                              required
                            />
                          </p>
                        </div>
                        <div className="field">
                          <p className="control">
                            <input
                              className="input"
                              type="password"
                              placeholder="Password"
                              id="password"
                              value={this.state.password}
                              onChange={event => this.setState({password: event.target.value})}
                              required
                            />
                          </p>
                        </div>
                        <div className="control has-text-centered">
                          <button className="button is-main">Log In</button>
                        </div>
                        {
                          this.props.showLoginError ? (
                            <p id="error" className="help is-danger">
                              Email or password is incorrect.
                            </p>
                          ) : null
                        }
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>     
    );
  };
};

const mapStateToProps = state => ({
  loginError: state.auth.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);