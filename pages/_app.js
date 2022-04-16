import { Fragment, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('');
  const themeChanger = () => {
    let changeThemeColor = theme === 'dark' ? '' : 'dark';
    localStorage.setItem('theme', changeThemeColor);
    setTheme(changeThemeColor);
  }

  useEffect(() => {
    const fetchCurrTheme = localStorage.getItem('theme');
    setTheme(fetchCurrTheme === 'dark' ? 'dark' : '');

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return <div className="dark:text-white dark:bg-gray-600 min-h-screen">
    <Navbar themeHandler={themeChanger} />
    
    <div className="max-w-6xl m-auto px-4 py-6">
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
