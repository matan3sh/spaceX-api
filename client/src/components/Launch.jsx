import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchDetails from './LaunchDetails';
import Loader from './Loader';

const LAUNCH_QUERY = gql`
  query LaunchQery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = ({ match }) => {
  let { flight_number } = match.params;
  flight_number = parseInt(flight_number);

  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);
          return <LaunchDetails launch={data.launch} />;
        }}
      </Query>
    </>
  );
};

export default Launch;
