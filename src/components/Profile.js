import React, {Component} from 'react';
import axios from 'axios';

const urlSendData = 'http://127.0.0.1:8081/updateUser'

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state={
            userid:'',
            username: '',
            email: this.props.userEmail,
            password:''
        }
    }

    handleProfileSubmit = (e)=>{
        e.preventDefault()

        axios.put(urlSendData, this.state)
            .then(response =>{
                console.log(response)
            })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="profileDiv">
                    <form onSubmit={this.handleProfileSubmit}>
                        <h1 className="title">Profile</h1>
                        <label>Username:</label><br/>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/><br/>
                        <label>E-mail:</label><br/>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/><br/>
                        <label>Password:</label><br/>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br/><br/>

                        <label>Game skin: </label><br/>
                        <select name="skin">
                            <option  value="skin1">Dark</option>
                            <option value="skin2">White</option>
                        </select>

                        <br/><br/><br/>
                        <button type='submit' className="buttons">Update</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Profile