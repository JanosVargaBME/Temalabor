import './App.css';
import './style/style.css';
import Registration from './components/Registration';
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile";
import Game from "./components/Game";
import HighScore from "./components/HighScore";
import React, {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            loggedInEmail : 'q'
        }
    }

    callbackFunction = (childData) => {
        this.setState({loggedInEmail: childData})
    }

    render() {
        if(this.state.loggedInEmail !=='') {
            return (
                <div className="MyApp">
                    <Router>
                        <div>
                            <Navigation/>
                            <Switch>
                                <Route path="/"             exact component={() => <MainPage    userEmail={this.state.loggedInEmail} />}/>
                                <Route path="/profile"      exact component={() => <Profile     userEmail={this.state.loggedInEmail} />}/>
                                <Route path="/game"         exact component={() => <Game        userEmail={this.state.loggedInEmail} />}/>
                                <Route path="/highscore"    exact component={() => <HighScore   userEmail={this.state.loggedInEmail} />}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            );
        }
        else {
            return (
                <div className="MyApp">
                    <header className="App-header">
                        <Registration parentCallback = {this.callbackFunction}/>
                    </header>
                </div>

            )
        }
    }
}

export default App;
