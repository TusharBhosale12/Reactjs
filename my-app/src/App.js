import React from 'react';
import './App.css';

function App() {
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Contact', link: '/contact' },
    { title: 'About', link: '/about' },
    {title: 'Careers',link:'/'},
    {title:'New',link:'/'},
  ];

  return (
    <div className="App">
      <h2>Welcome To My Website</h2>
      <nav>
        <ul id="navbar">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;