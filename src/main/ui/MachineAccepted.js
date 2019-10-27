import React from 'react';

export default function MachineAccepted({ powerStatus }) {
  return (
    <div>
      <span>Power status:</span>
      {' '}
      <span className="text-danger">Stopped</span>
    </div>
  );
}
