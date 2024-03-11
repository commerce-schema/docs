import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Distrupting eCommerce Analytics',
    description: (
      <>
        Historically, eCommerce analytics has been a closed ecosystem.
        Analytics platforms position themselves as "proprietary tech."
        We believe that attribution and analytics is <i>just math</i>. We seek to disrupt this space
        with open-source tools and strategies.
      </>
    ),
  },
  {
    title: 'Building Together',
    description: (
      <>
        As an open-source community with loosely-held shared conventions, we can work toghther
        to advance data science and data-driven marketing for the broader eCommerce community.
        Together, we all win.
      </>
    ),
  }
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
