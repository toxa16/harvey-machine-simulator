import React from 'react';

export default function Main() {
  return (
    <div className="container pt-5">
      <h1 className="text-center">Machine Simulator</h1>
      <div className="mt-5">
        <span>Power status:</span>
        {' '}
        <span className="text-danger">Stopped</span>
      </div>
    </div>
  );
}
