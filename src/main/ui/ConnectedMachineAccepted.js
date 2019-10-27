import { connect } from 'react-redux';

import MachineAccepted from './MachineAccepted';

function mapStateToProps(state) {
  return {
    powerStatus: state.main.powerStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedMachineAccepted = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineAccepted);

export default ConnectedMachineAccepted;
