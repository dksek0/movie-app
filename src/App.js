import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Datail from './routes/Datail';
import Navigation from './components/Navigation';
import "./routes/App.css"

function App () {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Datail} />
      </HashRouter>
    </>
  )
}

export default App;
