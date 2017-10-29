import React from 'react'
import './style.css';
import Header from '../header'

export default () => (
    <div>
        <div className="screen2">
          <Header />

            <p className="screen2-intro">
                <h1>Write to the mayor about the issue you would like addressed</h1>

                <textarea rows="20" cols="50"></textarea>
            </p>
            <button className="button">Generate Postcard</button>
        </div>
    </div>
)