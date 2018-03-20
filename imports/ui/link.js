import React from "react";
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";



class Link extends React.Component{
    
    onLogout() {
        //this.props.history.push("/");
        Meteor.logout();
    }
    render(){
        
        return(
            <div>
                <p>This is link</p>
                <button type="submit" onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}

export default withRouter(Link);