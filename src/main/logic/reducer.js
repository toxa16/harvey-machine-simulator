import ActionType from './action-type.enum';
import { MachineStatus, PowerStatus } from './enums';

const initialState = {
  machineStatus: MachineStatus.PENDING,
  powerStatus: PowerStatus.STOPPED,
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
    case ActionType.MACHINE_START: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STARTING,
      });
    }
    case ActionType.MACHINE_STARTED: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STARTED,
      });
    }
    case ActionType.MACHINE_STOP: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STOPPING,
      });
    }
    case ActionType.MACHINE_STOPPED: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STOPPED,
      });
    }
    default: return state;
  }
}
