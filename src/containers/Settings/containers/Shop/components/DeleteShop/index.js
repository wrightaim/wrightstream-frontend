// REACT
import React from 'react';

// ROUTER
import {Link} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {archiveShop} from '../../../../../../state/actions/shop';
import {logout} from '../../../../../../state/actions/auth';

// ==========

class DeleteShop extends React.Component {
  deleteShop = async () => {
    await this.props.archiveShop();
    this.props.logout();
  };

  render () {
    return (
      <div className="has-text-centered">
        <p>Are you sure you want to delete your shop?</p>
        <div className="buttons">
          <span className="button" onClick={this.props.toggle}>Cancel</span>
          <Link className="button is-danger" to="/" onClick={this.deleteShop}>Delete</Link>
        </div>
      </div>     
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  archiveShop,
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShop);