import React from 'react';

import MachinePending from './MachinePending';
import MachineRejected from './MachineRejected';
import { MachineStatus } from '../logic/enums';
import ConnectedMachineAccepted from './ConnectedMachineAccepted';

export default function Main({ machineStatus }) {
  const displayBody = () => {
    switch (machineStatus) {
      case MachineStatus.REJECTED: {
        return <MachineRejected />;
      }
      case MachineStatus.ACCEPTED: {
        return <ConnectedMachineAccepted />;
      }
      default: return <MachinePending />;
    }
  };

  return (
    <div className="container pt-5">
      <h1 className="text-center">Machine Simulator</h1>
      <div className="mt-5">
        { displayBody() }
      </div>
    </div>
  );
}
