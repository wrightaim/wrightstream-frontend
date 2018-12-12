// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStaffs } from '../../../../state/actions/shop';

// COMPONENTS
import Staff from './components/Staff';

// ==========

class Staffs extends React.Component {
  componentDidMount () {
    this.props.getStaffs();
  };

  render () {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title">Staff</h1>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <form onSubmit={this.addStaff}>
                  <button className="button is-primary is-outlined">Add</button>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div id="staff">
              <div className="columns">
                {
                  this.props.staffs.map((staff, i) => {
                    return (
                      <Staff key={i} staff={staff} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
  };
};

const mapStateToProps = state => ({
  staffs: state.shop.staffs,
  editStaffError: state.shop.editStaffError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getStaffs
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Staffs);