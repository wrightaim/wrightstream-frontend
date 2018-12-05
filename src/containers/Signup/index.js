// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupShop, signupUser, signupReset } from '../../state/actions/auth';

// ==========

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shop_name: '',
      shop_username: '',
      shop_email: '',
      passwordError: false,
      passwordClasses: 'input',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      verify_password: ''
    };
  };

  signupShop = event => {
    event.preventDefault();
    const { shop_name, shop_username, shop_email } = this.state;
    const shop = { shop_name, shop_username, shop_email };
    this.props.signupShop(shop);
  };

  signupUser = event => {
    event.preventDefault();
    const { first_name, last_name, email, password, verify_password } = this.state;
    if (password !== verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-danger',
        passwordError: true
      });
    } else {
      const user = { first_name, last_name, email, password };
      this.props.signupUser(user, this.props.shop_id, this.props.history);
    }
  };

  componentDidMount () {
    this.props.signupReset();
  };

  render () {
    return (
      <div id="signup">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-6-desktop is-offset-3-desktop">
                  <div className="card">
                    <div className="card-content">
                      {
                        !this.props.signupUserStep ? (
                          <form onSubmit={this.signupShop}>
                            <h1>Step 1: Tell us more about your shop</h1>
                            <div className="field">
                              <p className="control">
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Shop Name"
                                  id="shop_name"
                                  value={this.state.shop_name}
                                  onChange={event => this.setState({shop_name: event.target.value})}
                                  required
                                />
                              </p>
                            </div>
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
                                  placeholder="Shop Email"
                                  id="shop_email"
                                  value={this.state.shop_email}
                                  onChange={event => this.setState({shop_email: event.target.value})}
                                  required
                                />
                              </p>
                            </div>
                            {
                              this.props.signupShopError ? (
                                <p id="error" className="help is-danger">
                                  Shop creation failed.
                                </p>
                              ) : null
                            }
                            <div className="control has-text-centered">
                              <button className="button is-main">Create Shop</button>
                            </div>
                          </form>
                        ) : (
                          <form onSubmit={this.signupUser}>
                            <h1>Step 2: Tell us more about you</h1>
                            <div className="field is-horizontal">
                              <div className="field-body">
                                <div className="field">
                                  <p className="control">
                                    <input
                                      className="input"
                                      type="text"
                                      placeholder="First Name"
                                      id="first_name"
                                      value={this.state.first_name}
                                      onChange={event => this.setState({first_name: event.target.value})}
                                      required
                                    />
                                  </p>
                                </div>
                                <div className="field">
                                  <p className="control">
                                    <input
                                      className="input"
                                      type="text"
                                      placeholder="Last Name"
                                      id="last_name"
                                      value={this.state.last_name}
                                      onChange={event => this.setState({last_name: event.target.value})}
                                      required
                                    />
                                  </p>
                                </div>
                              </div>
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
                            <div className="field is-horizontal">
                              <div className="field-body">
                                <div className="field">
                                  <p className="control">
                                    <input
                                      className={this.state.passwordClasses}
                                      type="password"
                                      placeholder="Password"
                                      id="password"
                                      value={this.state.password}
                                      onChange={event => this.setState({password: event.target.value})}
                                      required
                                    />
                                  </p>
                                </div>
                                <div className="field">
                                  <p className="control">
                                    <input
                                      className={this.state.passwordClasses}
                                      type="password"
                                      placeholder="Verify Password"
                                      id="verify_password"
                                      value={this.state.verify_password}
                                      onChange={event => this.setState({verify_password: event.target.value})}
                                      required
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                            {
                              this.state.signupUserError ? (
                                <p id="error" className="help is-danger">
                                  Owner creation failed.
                                </p>
                              ) : null
                            }
                            {
                              this.state.passwordError ? (
                                <p id="error" className="help is-danger">
                                  Passwords do not match.
                                </p>
                              ) : null
                            }
                            <div className="control has-text-centered">
                              <button className="button is-main">Sign Up</button>
                            </div> 
                          </form>
                        )
                      } 
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
  shop_id: state.auth.shop_id,
  signupShopError: state.auth.signupShopError,
  signupUserStep: state.auth.signupUserStep,
  signupUserError: state.auth.signupUserError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signupShop,
  signupUser,
  signupReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);