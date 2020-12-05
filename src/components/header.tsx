import React from 'react';
import bem from 'bem-ts';

const b = bem('Header');

export interface HeaderProps {
  children: React.ReactNode;
}

function Header(props: HeaderProps) {
  const { children } = props;

  return (
    <header className={b()}>
      <div className={b('hero')}>{children}</div>
    </header>
  );
}

export default Header;
