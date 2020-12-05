import bem from 'bem-ts';
import React from 'react';

const b = bem('Content');

interface ContentProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Main Content layout provider
 */
function ContentLayout(props: ContentProps) {
  const { title, children } = props;

  return (
    <main className={b()}>
      <div className={b('bg')}>
        <div className={b('header')}>
          <h2>{title}</h2>
        </div>
        <div className={b('container')}>{children}</div>
      </div>
    </main>
  );
}

export default ContentLayout;
