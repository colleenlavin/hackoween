
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import './style.css';
import Header from '../header'

const Home = props => (
  <div className="App">
      <Header />
       
          <h1>What issues matter to you?</h1>
          <div className="imgHolder">
          <Link to="/message">
          <a href="/"><img border="0" alt="Pollution" width ="75%" src="https://scontent.fsan1-1.fna.fbcdn.net/v/t34.0-12/22901742_2064205923807593_1891655280_n.jpg?oh=54838335d2395f111ddf64b6a4e2209b&oe=59F7D21B" width="100" height="100" /></a>
            <span>Environmental Impact</span>
          </Link>
          </div>
          <div className="imgHolder">
          <Link to="/message">
            <a href="/message"><img border="0" alt="Civic Engagement" src="https://media.nbcsandiego.com/images/1200*675/SDSU-President-Protest-042816.jpg" width="100" height="100" /></a>
            <span>Civic Engagement</span>
            </Link>
          </div>
          <div className="imgHolder">
          <Link to="/message">
            <a href="/"><img border="0" alt="Pollution" src="https://scontent.fsan1-1.fna.fbcdn.net/v/t35.0-12/23107515_2064207863807399_1145578751_o.jpg?oh=e904aae7509381144e7c19b51ae0a2eb&oe=59F80B93" width="100" height="100" /></a>
            <span>Urban Development</span>
           </Link>
          </div>
      </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)