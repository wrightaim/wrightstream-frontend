// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { deleteItem } from '../../../../state/actions/products';

// ==========

class ItemDelete extends React.Component {
  handleSubmit = event => {
    this.props.deleteItem(this.props.item.id);
    this.props.toggle();
    this.props.toggleParent();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.handleSubmit}>
        Are you sure you want to delete
        <br />
        <small>jjjj</small>?
        <br /><br />
        <div className="control has-text-centered">
          <button className="button is-danger">Delete</button>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(ItemDelete);
