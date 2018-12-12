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
            <h1 className="title">Staff</h1>
            <hr />
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