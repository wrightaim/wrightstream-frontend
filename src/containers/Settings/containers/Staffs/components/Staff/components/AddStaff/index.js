// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import { editShop } from '../../../../../../state/actions/shop';

// ==========

class DeleteStaff extends React.Component {
  deleteStaff = event => {
    event.preventDefault();
    //    this.props.editShop();
    this.props.toggle();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.deleteStaff}>
        <p>Are you sure you want to</p>
        <div className="buttons">
          <span className="button" onClick={this.props.toggle}>Cancel</span>
          <button className="button is-danger">Delete</button>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  //  editShop
}, dispatch);

export default connect(null, mapDispatchToProps)(DeleteStaff);