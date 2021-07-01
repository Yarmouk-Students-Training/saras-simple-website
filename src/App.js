import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {makeStyles} from '@material-ui/core';
// Utilities & Components
import Header from './components/Header/Header';
import ThemeUtilities from './ThemeUtilities';
// Pages
import { Login, RegisterLawyer, RegisterRegular,Cases, Lawyers, Blogs, LawyerProfile } from './pages/';
// Configure JSS for RTL support
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const { ltrTheme, rtlTheme } = ThemeUtilities;
function App() {
  const [theme, setTheme] = useState(ltrTheme);
  const [isRtl, setIsRtl] = useState(false);
  useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
    if(isRtl)
        setTheme(rtlTheme);
    else
        setTheme(ltrTheme);
  }, [isRtl]);

  const useStyles = makeStyles((theme) => ({
    center: {
      ['@media (min-width:1280px)']: { // eslint-disable-line no-useless-computed-key
        margin:"0 4%",
      },
      ['@media (min-width:1366px)']: { // eslint-disable-line no-useless-computed-key
        margin:"0 4%",
      },
      [theme.breakpoints.only('xl')]: {
        margin:"0 10%"
      },
    },
  }));
  
  const classes = useStyles()
  return (
    
    <div className={classes.center}>
    <ThemeProvider theme={theme} >
      <StylesProvider jss={jss}>
        <Router>
          <div>
            <Header />
            <div >
                <Switch>
                  <Route exact path="/">
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/register">
                    <RegisterRegular language="Ar" />                    
                  </Route>
                  <Route exact path="/register/lawyer">
                    <RegisterLawyer />
                  </Route>
                  <Route exact path="/cases">
                    <LawyerProfile />
                  </Route>
                  <Route exact path="/lawyers">
                    <Lawyers />
                  </Route>
                  <Route exact path="/blogs">
                    <Cases />
                  </Route>
                </Switch>
            </div>
          </div>
        </Router>
      </StylesProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;