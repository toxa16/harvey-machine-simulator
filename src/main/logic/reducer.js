import ActionType from './action-type.enum';
import { MachineStatus } from './enums';

const initialState = {
  machineStatus: MachineStatus.PENDING,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.MACHINE_REJECTED: {
      return Object.assign({}, state, {
        machineStatus: MachineStatus.REJECTED,
      });
    }
    case ActionType.MACHINE_ACCEPTED: {
      return Object.assign({}, state, {
        machineStatus: MachineStatus.ACCEPTED,
      });
    }
    default: return state;
  }
}
