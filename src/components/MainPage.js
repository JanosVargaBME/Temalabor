import React, { Component } from 'react';


class MainPage extends Component{
        render() {
                return (
                    <div id="story">
                            <h1>Pac-Man</h1><br/>

                            <h2>History</h2>

                            <p>Pac-Man is a 1980 maze action video game developed and released by Namco for arcades.
                            The original Japanese title of Puck Man was changed to Pac-Man for international
                            releases as a preventative measure against defacement of the arcade machines by
                            changing the P to an F. In North America, the game was released by Midway Manufacturing
                            as part of its licensing agreement with Namco America.</p>

                            <h2>The Game</h2>

                            <p>
                            The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts.
                            Eating large flashing dots called "Power Pellets" causes the ghosts to turn blue,
                            allowing Pac-Man to eat them for bonus points. </p>

                            <h2>Control</h2>

                            <p>You can control pacman with the UP, DOWN, LEFT and RIGHT arrow key.
                            You win if you collect all the pellets!
                            </p>
                    </div>
                )
        }
}
export default MainPage