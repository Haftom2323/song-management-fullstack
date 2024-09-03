import React from 'react';
import { Spinner } from './StyledComponents'; 

const LoadingIndicator: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spinner /> 
  </div>
);

export default LoadingIndicator;
