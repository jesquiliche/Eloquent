import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aprende a utilizar este ORM ',
    Svg: require('@site/static/img/laravel.png').default,
    description: (
      <>
      En este tutorial de Eloquent, aprenderás a utilizar uno de los ORM más populares de PHP para interactuar con tu base de datos. Desde la configuración inicial hasta la creación de consultas complejas, este tutorial cubre todo lo que necesitas saber para utilizar Eloquent en tu proyecto.
      </>
    ),
  },
 
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
     
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
