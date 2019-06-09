import React from 'react'
import './image.css'

const Image = props => (
    
    <img alt={props.name} src={props.image} onClick={props.clickImage} data-id={props.id} className="choose" />
)

export default Image