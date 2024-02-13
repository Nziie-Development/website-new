import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://www.youtube.com/watch?v=uHgt8giw1LY"/>
    </div>
  );
};

export default RedirectPage;