# memoryGame

Memory Game is a React app in which you attempt to click on unique images. If you click on all the images without duplication, then you win the game! If you click a duplicate image, then the game will reshuffle and your points will start over from 0. The challenge is in the fact that the game will shuffle the images every time you make a choice. Good luck!

The bulk of Memory Game's code can be found in the memory-game/src folder. Game logic is in App.js, the individual cards are defined as component in components/Geometric.js, and the Bootstrap grid elements (column, row, etc), are to be found in the components/Grid/ directory.The images displayed on the screen are stored in the public folder and then pulled from an array of objects saved in src/images.json. Randomizing is done using a JavaScript implementation of the Fisher-Yates Shuffle.  

Link to the deployed app: https://boursler.github.io/memoryGame/
