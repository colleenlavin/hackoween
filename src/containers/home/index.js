
import React from 'react'
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
        <p className="App-intro">
          <h1>What issues matter to you?</h1>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="http://purrtacular.com/wp-content/uploads/2017/01/husky-dog-mother-rescues-kitten-15.jpg" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
        </p>
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