## Tic Tac Toe

### Description:
This is a project that I edited for MIT xPRO's web development class. The goal was to refactor a tic-tac-toe game in a manner of our choosing. 

Most of the code was provided for me by MIT xPRO. 
 
The three main changes I made were the following: 
1. I edited the anonymous on-click function for the game squares so that a square can only be clicked (and thus the function takeTurn can only be fired) if the square has not already been clicked by a player in an earlier round. This prevents a player from accidentally changing an existing tick mark in a square. 
2. I edited the function that checks to see if the game is over to include checking for ties.  
3. I added a button that appears after the game is over that can be clicked to refresh the page and play again. 

I also generally tried to streamline the code as much as possible, for instance getting rid of dead code and combining the player-turn message and the winning-player message into a single variable and showing whichever message was appropriate depending on whether the game was still in progress. I made some small changes to the color-scheme of the game as well. 

#### How to Run: 

You should be able to run the standalone.html file in a local server 8080 to play the game. 

#### Support:

N/A

#### Roadmap of Future Improvements: 
I'd be interested in adding a feature whereby a player can select a square to highlight it and then press a button that pops up to confirm their selection. 

#### License Information:

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.