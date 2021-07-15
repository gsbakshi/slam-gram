import React, {useState} from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import UploadPage from './page/upload-page/upload-page.component';
import LoginPage from './page/login-page/login-page.component';

const App = () => {

  let history = useHistory();

  const [currentUser, setCurrentUser] = useState(true);
  
  const [hidden, setHidden] = useState(true);

  const toggleAccountDropdownHidden = () => setHidden(!hidden);
  
  const toggleCurrentUser = () => {
    setCurrentUser(!currentUser);
    if (currentUser) {
      history.push('/login');
      toggleAccountDropdownHidden();
    }
  };

  return (
    <div className="App">
      <Header
        currentUser={ currentUser }
        toggleUser={ toggleCurrentUser }
        toggleAccountDropdownHidden={ toggleAccountDropdownHidden }
        hidden={ hidden }
      />
      <div className='page'>
        <Switch>
          <Route exact path='/'
            render={
              () => currentUser ? (
                <HomePage />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <Route exact path="/upload"
            render={
              () => currentUser ? (
                <UploadPage />
              ) : (
                  <Redirect to='/login' />
              )
            }
          />
          <Route exact path="/login"
            render={
              () => currentUser ? (
                <Redirect to='/' />
              ) : (
                  <LoginPage toggleUser={ toggleCurrentUser } />
              )
            }
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;