import { div } from 'prelude-ls';
import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
   <div>
     <h1>HATS PAGE</h1>
   </div>
);

function App() {   
  return ( 
    /*
      exact can be {true} or {false}
      if exact is not set then is is set to {true}      
    **/
   /*
     Switch when if finds a path it will not render 
     any other. so if we remove exact but have Switch 
     only the Homepage will be rendered if we go to
     /hats
   */

    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
