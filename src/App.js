import React, {useState} from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import UploadPage from './page/upload-page/upload-page.component';

const App = () => {

  const [currentUser, setCurrentUser] = useState(true);
  
  const [hidden, setHidden] = useState(true);

  const toggleAccountDropdownHidden = () => {
    console.log('Toggle Account Dropdown');
    setHidden(!hidden);
    console.log('Exit Toggle Account Dropdown');
  };

  const toggleCurrentUser = () => {
    console.log('Toggle Current User');
    setCurrentUser(!currentUser);
    console.log('Exit Toggle Current User');
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
          <Route exact path='/' component={ HomePage } />
          <Route path="/upload" component={ UploadPage } />
        </Switch>
      </div>
    </div>
  );
};

export default App;