import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from './components/upload/Upload'

function App(){
  return (
    <div className="App">
      {/* <Header/>
      <Main/> */}
      <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route
              path="/video/:id"
              render={props => <FeaturedVid {...props} />}
            /> */}
            <Route path="/upload" component={Upload} />
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
