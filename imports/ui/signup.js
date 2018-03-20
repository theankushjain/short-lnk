import React from "react";
import { Link } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmit(e){
        e.preventDefault();

        let email= this.refs.email.value.trim();
        let password= this.refs.password.value.trim();

        if(password.length<6){
            return this.setState({
                error:"Password must be atleast 6 characters long"
            })
        }

        Accounts.createUser({email,password},(err)=>{
            if(err){
                this.setState({error:err.reason});
            }
            else{
                this.setState({error:""});
            }
        })
        // this.setState({
        //     error: "Something Went Wrong!!"
        // })
    }
    render() {
        return (
            <div>
                <h1>Sign Up to Short Lnk</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button>Register</button>
                </form>
                <Link to="/">Already have an account? Log In </Link>
            </div> 
        );
    }
}