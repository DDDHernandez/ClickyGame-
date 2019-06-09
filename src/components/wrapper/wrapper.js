import React from 'react'
import './wrapper.css'


const Wrapper = props => ( 
<div className="row">
<div className="body-content fluid">
<div className="jumbotron jumbotron-fluid" >
<div className="container">
<header ><span><h1 className="header">The Click Tracker 2000</h1></span>
<span id="instructions"><p className="lead">The Click Tracker is a game that keeps track of which Will Ferrell movies you have clicked on.
    Try to click a new image until you have clicked all 12 of the images without repeating a picture. Hope you know your Will Ferrel Movies!</p></span>
</header>
</div>
</div>

<div className="container" id="imageContainer" >
<main className='wrapper' {...props} />
</div>
</div>
</div>
);
export default Wrapper