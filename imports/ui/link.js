import React from "react";
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Links } from "./../api/links";
import LinksList from "./LinksList";



class Link extends React.Component{
    
    onLogout() {
        //this.props.history.push("/");
        Meteor.logout();
    }


    onSubmit(e){
        e.preventDefault();
        const url= this.refs.url.value.trim();
        if(url){
            //was used with insecure
                //Links.insert({url,userId:Meteor.userId()});
            //after removing insecure
            Meteor.call('links.insert', url);
            this.refs.url.value = "";
        }
       
    }
    render(){
        
        return(
            <div>
                <h1>Your Links</h1>
                <button type="submit" onClick={this.onLogout.bind(this)}>Logout</button>
                <LinksList />
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Link);