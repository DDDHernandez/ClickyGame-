The Clicky Tracker
Test your memory of Will Ferrell's movies with The Click Tracker Game. The Click Tracker is a memory skill application built using React. The objective of the game is to be able to go through and click each player's image once. Each time you click a film poster, your score goes up by one. If you click a films poster twice, you lose and the game resets (score goes back to 0).

This project was bootstrapped with Create React App.

You can find the most recent version of this guide here.

How the app works
When you open the application, you will see images of 12 players. To start the game, click a player image. Each player in the players.json file has a property named "clicked." By default, each player starts out with a clicked value of false. When you click a player, the clicked value for that player is set to true. The object of the game is to click every player once and only once. When you click a player for the first time, your score goes up by one. But, if you click a player more than once (that is, click a player with a clicked value of true), the score will reset, and you have to start over. When the game is reset, each player's clicked value is set back to false. You win the game when you click each player on the screen once (that is, every player in players.json has a clicked value of true).


How the app is built
This project was built using React, which is an open-source Javascript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into self-contained components.

The React documentation is available at https://reactjs.org/.

Getting started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to https://dddhernandez.github.io/ClickyGame-/.

To set up this application locally on your computer, perform the following steps:

Clone the repository

Install Node.js

Install yarn

Install the dependencies

Start the server

Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

  git clone git@github.com:DDDHernandez/ClickyGame-.git
  cd ClickGame-



deployed version can be found here: https://dddhernandez.github.io/ClickyGame-/