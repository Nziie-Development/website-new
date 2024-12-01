import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://discord.com/oauth2/authorize?client_id=1312877991940067369&permissions=8&integration_type=0&scope=bot+applications.commands"/>
    </div>
  );
};

export default RedirectPage;
