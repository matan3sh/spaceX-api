import React from 'react';
import LaunchesItem from './LaunchesItem';

const LaunchesList = ({ launches }) => {
  return (
    <div>
      {launches?.map((launch, index) => (
        <LaunchesItem launch={launch} key={index} />
      ))}
    </div>
  );
};

export default LaunchesList;
