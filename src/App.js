import React, {
  useEffect,
  useState
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/pages/Checkout';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import { auth } from './firebase';
import { useStateValue } from './ContextApi/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {
        // user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/login' >
            <Login />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
