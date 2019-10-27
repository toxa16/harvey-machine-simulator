import { MachineStatus } from './enums';

const initialState = {
  machineStatus: MachineStatus.PENDING,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
