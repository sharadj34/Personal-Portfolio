import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header id="header" className="App-header">
      <h1>Hi, I'm {name}</h1>
      <p>{title}</p>
    </header>
  );
};

export default Header;
