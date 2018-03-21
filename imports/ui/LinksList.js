import React from 'react';
import { Tracker } from "meteor/tracker";
import { Links } from "./../api/links";
import { Meteor } from "meteor/meteor";

export default class LinkedList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            links:[]
        };
    }
    componentDidMount(){
        this.linksTracker=Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({links});
        })
    }

    componentWillUnmount(){
        this.linksTracker.stop();
    }

    renderLinksListItems(){
        if (this.state.links.length === 0) {
            return (
                    <p>Add first link to get started.</p>
            )
        }
        else {
            return this.state.links.map(function (link) {
                return (
                    //<Player key={player._id} player={player} />
                    <p key={link._id}>{link.url}</p>
                )
            })
        } 
    }
    render(){
        return(
            <div>
                <p>Links List</p>
                <div>{this.renderLinksListItems()}</div>
            </div>
        )
    }
}