import React from 'react'
import './style.css';
import Header from '../header'
import { Route, Link } from 'react-router-dom'


export default () => (
  <div>
      <div className="screen2">
        <Header />
         <h1>Thank you for doing your civic duty!</h1>
      </div>
  =
      <div class="wrapper">
        <button class="button"> <Link to="/">Complain Again!  </Link></button>
      </div>
      
  </div>
)