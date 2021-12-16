import React,{Component} from 'react';
import axios from 'axios';
import '../style/style.css';

import '../App.css';

const urlGetData = 'http://127.0.0.1:8081/listUsers'
const urlSendData = 'http://127.0.0.1:8081/regUser'

class Registration extends Component{
    constructor(props) {
        super(props);
        this.state={
            existingUsers:[],
            userRegName: '',
            userRegEmail:'',
            userRegPassword:'',
            userLoginEmail:'',
            userLoginPassword:'',
            regErrorMessage: '',
            logErrorMessage: '',
            redirectVAR: ''
        }
    }

    //Leszedi az adatokat az url-rol
    componentDidMount() {
        axios.get(urlGetData)
            .then(response =>{
                this.setState({
                    existingUsers: response.data
                })
            })
    }

    //Ha beir a felhasznalo, akkor valtoztatja a state valtozoit
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            regErrorMessage: '',
            logErrorMessage: '',
        })
    }

    //Regisztracio kezelese
    handleRegisterSubmit = (e) =>{
        e.preventDefault()
        let contains = false
        // eslint-disable-next-line
        this.state.existingUsers.map(user => {
            if(user.email === this.state.userRegEmail)
                contains = true
        })

        //NINCS REGISZTRALVA MEG
        if(contains === false ){
            this.setState({
                regErrorMessage: '',
                redirectVAR: 'reg'
            })

            axios.post(urlSendData, this.state)
                .then(response =>{
                    console.log(response)
                })

            this.props.parentCallback(this.state.userRegEmail)
        }
        //REGISZTRALVA VAN
        else{
            this.setState({
                regErrorMessage: 'E-mail already registered!'
            })
        }
    }

    //Bejelentkezes kezelese
    handleLoginSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            logErrorMessage: 'E-mail is not in the archives!'
        })
        // eslint-disable-next-line
        this.state.existingUsers.map(user => {
            // eslint-disable-next-line
            if(user.email === this.state.userLoginEmail && user.password === this.state.userLoginPassword) {
                this.setState({
                    logErrorMessage: '',
                    redirectVAR: 'login'
                })
                this.props.parentCallback(this.state.userLoginEmail)
            }
        })
    }

    //Oldal renderelese
    render(){
        //Ha sikeres a bejelentkezes
        if(this.state.redirectVAR !== '')
            return null

        return(
            <div>
                <div className="registerDiv">
                    <form onSubmit={this.handleRegisterSubmit}>
                        <h1 className="title">Register</h1>
                        <label>Username:</label><br/>
                        <input type="text" name="userRegName" value={this.state.userRegName} onChange={this.handleChange}/><br/>
                        <label>E-mail:</label><br/>
                        <input type="text" name="userRegEmail" value={this.state.userRegEmail} onChange={this.handleChange}/><br/>
                        <label>Password:</label><br/>
                        <input type="password" name="userRegPassword" className="aboveButton" value={this.state.userRegPassword} onChange={this.handleChange}/><br/>
                        <button type='submit' className="buttons">Register</button>
                        <span className="errorMessage">{this.state.regErrorMessage}</span>
                    </form>
                </div>
                <div className="loginDiv">
                    <form onSubmit={this.handleLoginSubmit}>
                        <h1 className="title">Login</h1>
                        <label>E-mail:</label><br/>
                        <input type="text" name="userLoginEmail" value={this.state.userLoginEmail} onChange={this.handleChange}/><br/>
                        <label>Password:</label><br/>
                        <input type="password" name="userLoginPassword" className="aboveButton" value={this.state.userLoginPassword} onChange={this.handleChange}/><br/>
                        <button type='submit' className="buttons">Login</button><br/>
                        <span className="errorMessage">{this.state.logErrorMessage}</span>
                    </form>
                </div>
            </div>
        )
    }
}
export default Registration