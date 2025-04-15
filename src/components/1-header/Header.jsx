import './header.css';
import { useState, useEffect } from 'react';
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('currentMode') ?? 'dark'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <header className='flex'>
      <button
        className='menu icon-menu flex'
        onClick={() => setShowModal(true)}
      ></button>
      <div />
      <nav>
        <ul className='flex'>
          <li>
            <a href=''>about</a>
          </li>
          <li>
            <a href=''>Articles</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Speaking</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className='mode flex'
        onClick={() => {
          // send value to localstorage
          localStorage.setItem(
            'currentMode',
            theme === 'dark' ? 'light' : 'dark'
          );

          // get value from localstorage
          setTheme(localStorage.getItem('currentMode'));
        }}
      >
        <span
          className={theme === 'light' ? 'icon-moon-o' : 'icon-weather-sunny'}
        ></span>
      </button>
      {showModal && (
        <div className='fixed'>
          <ul className='modal'>
            <li>
              <button
                className='icon-close'
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href=''>about</a>
            </li>
            <li>
              <a href=''>Articles</a>
            </li>
            <li>
              <a href=''>Projects</a>
            </li>
            <li>
              <a href=''>Speaking</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
