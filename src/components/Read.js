// This component reads data from the datasource
// @author Richard Ong <richard.ong@lollipoplab.io>

import React from 'react';
import { connect } from 'react-redux';
import { readItem } from '../actions';

import AppBar from 'material-ui/AppBar';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  handleReadItem: (index) => dispatch(readItem())
});

const Component = ({ handleReadItem }) => {
  return (
    <AppBar
      title={'Taffy'}
      onLeftIconButtonTouchTap={()=>{handleReadItem()}}
      />);
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
