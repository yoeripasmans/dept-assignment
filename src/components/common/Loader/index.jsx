import React from 'react';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';

const StyledLoader = styled(Loader)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;

const LoaderWrapper = () => {
  return (
    <StyledLoader
      type="TailSpin"
       color="#000"
       height={100}
       width={100}
       visible="true" />
  );
};

export default LoaderWrapper;
