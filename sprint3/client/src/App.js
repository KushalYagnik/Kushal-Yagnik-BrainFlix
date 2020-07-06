import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from './components/upload/Upload'
import NowPlaying from './components/nowplaying/NowPlaying';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
            <Route
              path="/videos/:id"
              render={props => <NowPlaying {...props} />}
            />
            <Route path="/upload" component={Upload} />
            <Route exact path="/" component={Main} />
            {/* Don't know if this path is required...keeping it for now */}
            <Route exact path="/videos" component={Main} /> 
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
