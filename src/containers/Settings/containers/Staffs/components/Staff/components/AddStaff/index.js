// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import { editShop } from '../../../../../../state/actions/shop';

// ==========

class DeleteStaff extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      role_id: 'Role *',
      email: '',
      password: '',
      verify_password: '',
      photo: '',
      passwordError: false,
      passwordClasses: 'input'
    };
  };

  deleteStaff = event => {
    event.preventDefault();
    //    this.props.editShop();
    this.props.toggle();
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <form className="has-text-centered" onSubmit={this.deleteStaff}>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      id="first_name"
                      placeholder="First Name *"
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
                      id="last_name"
                      placeholder="Last Name *"
                      value={this.state.last_name}
                      onChange={event => this.setState({last_name: event.target.value})}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div className="select">
                  <select
                    id="role_id"
                    value={this.state.role_id}
                    onChange={event => this.setState({role_id: event.target.value})}
                    required
                  >
                    <option disabled>Role *</option>
                    {
                      this.props.roles.map((role, i) => {
                        return (
                          <option key={i} value={role.id}>{role.name}</option>
                        );
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="email"
                  id="email"
                  placeholder="Email *"
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
                      id="password"
                      placeholder="Password *"
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
                      id="verify_password"
                      placeholder="Verify Password *"
                      value={this.state.verify_password}
                      onChange={event => this.setState({verify_password: event.target.value})}
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
                  type="text"
                  id="photo"
                  placeholder="Photo"
                  value={this.state.photo}
                  onChange={event => this.setState({photo: event.target.value})}
                />
              </p>
            </div>
            {
              this.state.signupUserError ? (
                <p className="help is-danger">
                  Owner creation failed.
                </p>
              ) : null
            }
            {
              this.state.passwordError ? (
                <p className="help is-danger">
                  Passwords do not match.
                </p>
              ) : null
            }
            <div className="buttons">
              <span className="button" onClick={this.props.toggle}>Cancel</span>
              <button className="button is-success">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  signupUserError: state.auth.signupUserError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  //  editShop
}, dispatch);

export default connect(null, mapDispatchToProps)(DeleteStaff);