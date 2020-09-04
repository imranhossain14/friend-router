import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Friend/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {


  return (
      <Router>
          <Switch>
         
              
              <Route path ="/home"> 
                    <Home></Home>
              </Route>
              <Route path ="/friend/:friendId"> 
                    <FriendDetail></FriendDetail>
              </Route>
              <Route exact path ="/"> 
                    <Home/>
              </Route>
              <Route path ="*"> 
                    <NoMatch></NoMatch>
              </Route>


          </Switch>
      </Router>
  );
}

export default App;
