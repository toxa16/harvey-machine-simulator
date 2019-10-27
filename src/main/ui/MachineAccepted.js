import React from 'react';

import { PowerStatus } from '../logic/enums';

export default function MachineAccepted({ powerStatus }) {
  const displayPowerStatus = () => {
    switch (powerStatus) {
      case PowerStatus.STARTING: return 'Starting...';
      case PowerStatus.STARTED: return 'Started';
      case PowerStatus.STOPPING: return 'Stopping...';
      default: return 'Stopped';
    }
  };

  const getPowerStatusClassName = () => {
    switch (powerStatus) {
      case PowerStatus.STARTING: return 'text-warning';
      case PowerStatus.STARTED: return 'text-success';
      case PowerStatus.STOPPING: return 'text-warning.';
      default: return 'text-danger';
    }
  };

  return (
    <div>
      <span>Power status:</span>
      {' '}
      <span className={getPowerStatusClassName()}>
        { displayPowerStatus() }
      </span>
    </div>
  );
}
