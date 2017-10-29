import React from 'react'
import './style.css';
import Header from '../header'
import { Route, Link } from 'react-router-dom'

export default () => (
    <div>
        <div className="screen2">
            <Header />

            <p className="screen2-intro">
                <h1>Write to the mayor about the issue you would like addressed</h1>
               <div>
                <form>
                    <input type="text" placeholder="Name" ></input>
                    <input type="text" placeholder="Email" ></input>
                </form>
                </div>

                <textarea rows="20" cols="50" placeholder="Complaint or concern"></textarea>
            </p>

            <button className="button"> <Link to="/thanks">Fax the mayor  </Link></button>

        </div>
    </div>
)