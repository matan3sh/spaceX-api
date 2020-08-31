import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LaunchDetails = ({ launch }) => {
  return (
    <div>
      <h1 className='display-4 my-3'>
        <span className='text-dark'>Mission: {launch.mission_name}</span>
      </h1>
      <h4 className='mb-3'>Launch Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>
          Flight Number: {launch.flight_number}
        </li>
        <li className='list-group-item'>Launch Year: {launch.launch_year}</li>
        <li className='list-group-item'>
          Launch Successful:{' '}
          <span
            className={classNames({
              'text-success': launch.launch_success,
              'text-danger': !launch.launch_success,
            })}
          >
            {launch.launch_success ? 'Yes' : 'No'}
          </span>
        </li>
      </ul>
      <h4 className='my-3'>Rocket Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>
          Rocket ID: {launch.rocket.rocket_id}
        </li>
        <li className='list-group-item'>
          Rocket Name: {launch.rocket.rocket_name}
        </li>
        <li className='list-group-item'>
          Rocket Type: {launch.rocket.rocket_type}
        </li>
      </ul>
      <hr />
      <Link to='/' className='btn btn-secondary'>
        Back
      </Link>
    </div>
  );
};

export default LaunchDetails;
