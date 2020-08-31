import React from 'react';

const Loader = () => (
  <img
    src='https://thumbs.gfycat.com/SpryNegligibleLeafcutterant-size_restricted.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Loader;
