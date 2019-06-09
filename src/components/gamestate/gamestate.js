import React from 'react'
import './gamestate.css'

const GameState = props => (
  <span className="gamestate" id="gamestate"><h4>{props.gamestate}</h4></span>
)

export default GameState;