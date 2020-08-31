import React from 'react';

const LaunchesItem = ({
  launch: { mission_name, flight_number, launch_date_local, launch_success },
}) => {
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>Mission: {mission_name}</h4>
          <p>Date: {launch_date_local} </p>
        </div>
        <div className='col-md-3'>
          <button className='btn btn-secondary'>Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchesItem;
