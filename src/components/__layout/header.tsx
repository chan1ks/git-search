import React from 'react';

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return <h1 style={{ marginBottom: '10px' }}>{title}</h1>;
};

export default Header;
