// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {getUser, logout} from '../../state/actions/auth';

// ==========

class Profile extends React.Component {
  render () {
    const user = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      photo: this.props.user.photo,
      role_id: this.props.user.role_id
    };
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content">
          <div className="modal-container">
            uh
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);