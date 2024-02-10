import React, { useEffect } from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player/youtube'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/custom.css';
import DefaultLayout from "../layouts/DefaultLayout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faGem, faSackDollar, faMedal, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faGlobe, faGem, faSackDollar, faMedal, faEnvelope)

// Default implementation, that you can customize
export default function Root({children}) {
  useEffect(() => {
    window.$discordMessage = {
      profiles: {
        sentry: {
          author: 'Sentry',
          avatar: '../../static/img/logo',
          bot: true,
          verified: true,
        },
        nziie: {
          author: 'vNziie--',
          avatar: 'https:/r.nziie.xyz/avatar',
        }
      }
    };
  });
  return (
    [children]
    );
}