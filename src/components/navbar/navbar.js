import React from 'react'
import './navbar.css'
import Counter from '../counter/counter'
import GameState from '../gamestate/gamestate'

const Navbar = props => (
  
  <nav className="navbar navbar-expand-lg">
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <span id="title"><h4>The Click Tracker</h4></span>
      </div>
      <div className="col-sm-12 col-md-4">
       <span className="gamestate"> <GameState gamestate={props.gamestate} /></span>
      </div>
      <div className="col-sm-12 col-md-4">
       <span className="counter"> <Counter count={props.count} highscore={props.highscore} /> </span>
      </div>
    </div>
    
  </nav>
  
)

export default Navbar;