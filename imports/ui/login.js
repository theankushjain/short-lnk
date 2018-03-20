import React from "react";
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email},password,(err)=>{
            if (err) {
                this.setState({ error: err.reason });
            }
            else {
                this.setState({ error: "" });
            }
        })
        // this.setState({
        //     error: "Something Went Wrong!!"
        // })
    }
    render() {
        return (
            <div>
                <h1>Short Lnk</h1>
            
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <Link to="/signup">Don't have an account? Sign Up </Link>
            </div>          
        );
    }
}