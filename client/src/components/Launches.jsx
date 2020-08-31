import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchesList from './LaunchesList';
import MissionKey from './MissionKey';
import Loader from './Loader';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);
          return <LaunchesList launches={data.launches} />;
        }}
      </Query>
    </>
  );
};

export default Launches;
