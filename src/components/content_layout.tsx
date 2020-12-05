import bem from 'bem-ts';
import React from 'react';

const b = bem('Content');

interface ContentProps {
  children: React.ReactNode;
}

/**
 * Main Content layout provider
 */
function ContentLayout(props: ContentProps) {
  return (
    <main className={b()}>
      <div className={b('bg')}>
        <div className={b('header')}>
          <h2>Select country</h2>
        </div>
        <div className={b('container')}>{props.children}</div>
      </div>
    </main>
  );
}

export default ContentLayout;
