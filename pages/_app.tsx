import { AppProps } from 'next/app';
import { ResponsiveAppBar } from '../components/NavBar';
import * as React from 'react';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../utils/Theme';



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<any>(lightTheme);
  

  React.useEffect(() => {
    document.body.classList?.remove('loading');
    document.title = 'Abstergo';

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, []);

  return (
    <div className="container" style={{ padding: '50px 0 100px 0', backgroundColor: theme.palette.background.default }}>
      <ResponsiveAppBar/>
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
