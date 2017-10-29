import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Message from '../message'
import Image from '../images'
import Thanks from '../thanks'


const App = () => (
  <div>
    <header>
      {/* <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/message">Message</Link> */}
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/message" component={Message} />
      <Route exact path="/select-image" component={Image} />
      <Route exact path="/thanks" component={Thanks} />
    </main>
  </div>
)
export default App