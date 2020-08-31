import React from 'react';
import { connect } from 'react-redux';

import { fetchSets, fetchSet } from '../actions';

class Sets extends React.Component {
  render() {
    return <div>Sets</div>;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  fetchSet,
  fetchSets,
  createSet,
  editSet,
  deleteSet
})(Sets);
