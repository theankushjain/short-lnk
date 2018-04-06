import React from "react";
import { Meteor } from "meteor/meteor";
import Modal from 'react-modal';

export default class AddLink extends React.Component {
    constructor(props){
        super(props);
        this.state={
            url:'',
            isOpen:false,
            error:''
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const url = this.state.url;
        // if (url) {
            //was used with insecure
            //Links.insert({url,userId:Meteor.userId()});
            //after removing insecure
            Meteor.call('links.insert', url, (err,res)=>{
                if(!err){
                    this.setState({url:"", isOpen:false})
                    this.handleModalClose();
                } else{
                    this.setState({error: err.reason})
                }
            });
        // }
    }
    onChange(e){
        this.setState({
            url: e.target.value.trim()
        })
    }
    handleModalClose(){
        this.setState({ isOpen: false, url: '' })
    }
    render() {
        return (
            <div>
                <button className="button" onClick={()=>this.setState({isOpen:true})}>+ Add Link</button>
                <Modal 
                    isOpen={this.state.isOpen}
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--modal"
                    contentLabel="Add Link"
                    onAfterOpen={()=>this.refs.url.focus()}
                    onRequestClose={this.handleModalClose.bind(this)}>
                    <h1>Add Link</h1>
                    {this.state.error?<p>{this.state.error}</p>:undefined}
                    <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
                        <input
                            type="text"
                            ref="url"
                            placeholder="URL"
                            ref="url"
                            value={this.state.url}
                            onChange={this.onChange.bind(this)} />
                        <button className="button">Add Link</button>
                        <button className="button button--secondary" type="button" onClick={this.handleModalClose.bind(this)}>Cancel</button>
                    </form>
                    
                </Modal>
                
            </div>
            
        )
    }
}