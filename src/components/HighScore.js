import React, {Component} from 'react';
import axios from 'axios';

const url = 'http://127.0.0.1:8081/listScores'

class HighScore extends Component{
    constructor(props) {
        super(props);
        this.state={
            scores:[]
        }
    }

    componentDidMount() {
        axios.get(url)
            .then(response =>{
                this.setState({
                    scores: response.data
                })
            })
            .catch((any) =>{
                    console.log(any)
                }
            )
    }

    render(){
        const {scores} = this.state
        let index = 0
        return(
            <div>
                <h1>List of Scores</h1>
                <table>
                    <thead>
                        <th>#</th>
                        <th>Score</th>
                        <th>User Name</th>
                        <th>Time</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {
                            scores.map(score =>
                                <tr key={score.id}><td>{index++}</td> <td>{score.score}</td><td>{score._player.name}</td><td>{score.time}</td><td>{score.date}</td></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HighScore