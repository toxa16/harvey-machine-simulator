import React from 'react';

export default function MachineRejected() {
  return (
    <div>
      <p className="text-danger">Unable to connect to the control server.</p>

      <p className="text-muted">
        Current prototype version of the <b>harvey.one</b> control system 
        doesn't allow to connect more than one concurrent machines 
        to the control server.
      </p>
      <p className="text-muted">
        Seems that there is another machine connected to the server.
      </p>
    </div>
  );
}
