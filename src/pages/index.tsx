import React from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player/youtube'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import DefaultLayout from "../layouts/DefaultLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const features = [
  {
    title: 'Moderation',
    imageUrl: 'img/tools-transparent.png',
    description: (
      <>
        Sentry's incredibly adaptable moderation system not only empowers you with a comprehensive set of tools but also bestows upon you the highest degree of control in effectively administering your Discord server. Whether you choose to personally supervise moderation or delegate this task to specifically appointed moderators, Sentry guarantees a seamlessly efficient moderation experience, contributing to the optimal management of your server.
        <br/>
        <br/>
        
      </>
    ),
  },
  {
    title: 'Custom Punishments',
    imageUrl: 'img/fire.png',
    description: (
      <>
        Through Custom Punishments, you can specify the actions Sentry should take when a member accumulates a specific set of warnings. Whether it involves muting, kicking, or banning a user based on warning levels, Sentry provides extensive customization choices tailored to your unique requirements.
        <br/>
        <br/>
      </>
    ),
  },
  {
    title: 'Applications',
    imageUrl: 'img/clipboard.png',
    description: (
      <>
        Sentry's application introduces unique and unprecedented functionalities for designing, overseeing, and gauging user interactions within application systems. It offers various question formats, including multiple-choice options, yes/no responses, long text, short text, and more. Sentry empowers you with complete authority over application creation, allowing for extensive customization as per your needs.
        <br/>
        <br/>
      </>
    ),
  },
  {
    title: 'Permits (Custom Permissions)',
    imageUrl: 'img/key.png',
    description: (
      <>
        Utilizing Sentry's robust permissions system, you can guarantee that the appropriate members in your server are granted access to the commands you deem suitable for their use. Permits provide bot-specific permissions to roles of your choice.
        <br/>
        <br/>
      </>
    ),
  },
];

interface FeatureArgs {
  imageUrl?: string;
  title?: string;
  description: JSX.Element;
};

function Feature({imageUrl, title, description}: FeatureArgs) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6')}>
      {imgUrl && (
        <div className="text--center">
          <img className={classnames('padding-vert--md', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const siteConfig = context.siteConfig;
  return (
    <DefaultLayout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
        
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--primary button--lg'
                  )}
                  to={useBaseUrl('/intro')}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/logo.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <hr style={{'backgroundColor': '#962a7a'}}/>
        <div className="container">
        <h1 className='center hero__title'>Services</h1>
        <p className="center">These are the services I am currently offering. These may change over time as products come and go.</p>
        <div className="row margin-vert--lg">
          <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{'fontSize': '3em'}} beat />
                </div>
                <div className="card__header">
                <h2>Modmail v3 (2.50€/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Customizable modmail system</li>
                  <li>Customizable bot name</li>
                  <li>Customizable bot avatar</li>
                  <li>Customizable bot status</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="/silver" className="button button--outline button--primary button--block">Purchase</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

export default Home;
