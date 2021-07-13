import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='page'>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          {/* <Route path="/upload" component={ Upload } /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
