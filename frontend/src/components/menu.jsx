import React from 'react';
import Logo from './logo';

const links = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Services',
  },
  {
    href: '#',
    label: 'About Us',
  },
];

const Menu = () => {
  return (
    <div>
      <div>
        <nav>
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className>
        <button>Login / Sign Up</button>
      </div>
    </div>
  );
};

export default Menu;
