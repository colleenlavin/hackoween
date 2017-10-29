import React from 'react'
import './style.css';
import Header from '../header'
import { Route, Link } from 'react-router-dom'

class Screen5 extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <h1>Thank you!</h1>
      </div>
    );
  }
}
export default Screen5;