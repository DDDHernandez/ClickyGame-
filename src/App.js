import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import Wrapper from "./components/wrapper/wrapper";
import Image from "./components/image/image";
import images from "./images.json";
import Footer from "./components/footer/footer"
import './App.css';


class App extends Component {
  state = {
    images,
    count: 0,
    highscore: 0,
    gamestate: `Click a new movie each time!`
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  imageLooper = (imageCards, clickTarget) => {
    let count = this.state.count;
    for (let i=0; i < imageCards.length; i++) {
      if (imageCards[i].id === clickTarget && !imageCards[i].clicked) {
        let gameState = `Correct!`
        imageCards[i].clicked = true
        count++;
        this.setState({ count: count, gamestate: gameState, images: this.shuffleArray(imageCards) });
      
        if (count === 12) {          
           gameState = `You Win!`
           imageCards.forEach((image) => {
            image.clicked = false
          })
          this.setState({
            highscore: 12,
            count: 0,
            images: this.shuffleArray(imageCards),
            gamestate: gameState
          })
        }
        break;

      }  else if (imageCards[i].id === clickTarget && imageCards[i].clicked) {
        imageCards.forEach((image) => {
        image.clicked = false
        })
        this.setState({
            highscore: this.state.count > this.state.highscore ? this.state.count : this.state.highscore,
            count: 0,
            gamestate: `You lose!`,
            images: this.shuffleArray(imageCards)
        })
        break;
      }  
    }
  }

  clickImage = (event) => {
    let clickTarget = parseInt(event.target.getAttributeNode('data-id').value, 10)
    this.imageLooper(this.state.images, clickTarget)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Navbar gamestate={this.state.gamestate} count={this.state.count} highscore={this.state.highscore} />
        <Wrapper>
          {this.state.images.map(image => (
            <Image
              clickImage={this.clickImage}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              clicked={image.clicked}
            />
          ))}
        </Wrapper>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
