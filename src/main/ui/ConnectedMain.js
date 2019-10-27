import { connect } from 'react-redux';
import Main from './Main';

function mapStateToProps(state) {
  return {
    machineStatus: state.main.machineStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default ConnectedMain;
