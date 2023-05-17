import { AppProps } from 'next/app';
import { ResponsiveAppBar } from '../components/NavBar';
import * as React from 'react';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../utils/Theme';



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<any>(lightTheme);
  const [currPage, SetCurrPage] = React.useState("landing");


  const datacallback = (data:any) => {
    SetCurrPage(data);
  }

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
    <div className="container" style={{ padding: '50px 0 0px 0', backgroundColor: theme.palette.background.default }}>
      <ResponsiveAppBar datacallback={datacallback}/>
        <Component {...pageProps} currPage={currPage} callback={datacallback} theme={theme}/>
    </div>
  );
}

export default MyApp;
