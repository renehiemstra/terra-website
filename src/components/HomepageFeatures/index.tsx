import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Script with C-performance',
    Svg: require('@site/static/img/luajit.svg').default,
    description: (
      <>
        Simple and expressive statically typed compiled language built on top of the worlds fastest JIT-compiler.
      </>
    ),
    to: '/docs/features/script-with-c-performance',
  },
  {
    title: 'Multistage programming',
    Svg: require('@site/static/img/multistage.svg').default,
    description: (
      <>
        A low-level language meta-programmed by a high-level scripting language allows many behaviors that are not possible in other systems.
      </>
    ),
    to: '/docs/features/multistage-programming',
  },
  // Note: You've got multistage-programming repeated below - you'll want unique paths:
  {
    title: 'Backwards compatible with C',
    Svg: require('@site/static/img/cpp4.svg').default,
    description: (
      <>
        Interface directly with pre-existing C and Lua code without the need for wrappers or easily embed in a C / C++ project.
      </>
    ),
    to: '/docs/features/backwards-compatible-with-c',  // Fixed path
  },
  {
    title: 'Scope-based resource management',
    Svg: require('@site/static/img/RAII.svg').default,
    description: (
      <>
        Versatile, efficient and safe resource management tied to object lifetime.
      </>
    ),
    to: '/docs/features/scope-based-resource-management',  // Fixed path
  },
  {
    title: 'Ready for Exascale computing',
    Svg: require('@site/static/img/frontier2.svg').default,
    description: (
      <>
        Terra-Regent automatically discovers parallelism in shared-memory and distributed-memory programs composed of tasks, or functions.
      </>
    ),
    to: '/docs/features/exascale-computing',  // Fixed path
  },
  {
    title: 'Powerful standard library',
    Svg: require('@site/static/img/std.svg').default,
    description: (
      <>
        Concept-based multiple dispatch, smart allocators, multi-dimensional arrays, ranges, threads, unit-testing, package managing and more.
      </>
    ),
    to: '/docs/features/powerful-standard-library',  // Fixed path
  },
];

// Fixed Feature component to use the 'to' prop and Link
function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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