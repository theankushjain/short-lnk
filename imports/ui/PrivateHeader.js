import React from "react";
import { Meteor } from "meteor/meteor";
import PropType from "prop-types";

const PrivateHeader = (props)=>{
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">{props.title}</h1>
                <button className="button button--link-text" type="submit" onClick={() => { Meteor.logout(); }}>Logout</button>
            </div>    
        </div>

    )
}


PrivateHeader.propTypes = {
    title: PropType.string.isRequired 
}

export default PrivateHeader;