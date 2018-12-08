// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { editShop } from '../../../../../../state/actions/shop';

// ==========

class DeleteShop extends React.Component {
  deleteShop = event => {
    event.preventDefault();
//    this.props.editShop();
    this.props.toggle();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.deleteShop}>
        <p className="has-padding-bottom">Are you sure you want to delete your shop?</p>
        <div className="control has-text-centered">
          <button className="button is-danger">Delete</button>
        </div>
      </form>     
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
//  editShop
}, dispatch);

export default connect(null, mapDispatchToProps)(DeleteShop);