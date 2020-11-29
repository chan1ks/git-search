import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: any;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex column full-height">
      <div className="typography container-full layout--center full-width grow-1">
        <Header title={title} />
        <main>{children}</main>
      </div>
      <div className="layout--footer">
        <Footer author="chan1ks" />
      </div>
    </div>
  );
};

export default Layout;
