import React from 'react'
import './counter.css'

const Counter = props => (
  <span className="counter"><h4>Score: {props.count}<br/> Top Score: {props.highscore}</h4></span>
)

export default Counter;