import { Mongo } from 'meteor/mongo';
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Links= new Mongo.Collection('links');

if(Meteor.isServer){
    Meteor.publish('links', function(){
        userId=this.userId;
        return Links.find({userId});
    })
}

Meteor.methods({
    'links.insert'(url){
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        // try {              //the try catch block has been removed only because of simple-schema configuration file
            new SimpleSchema({
                url: {
                    type: String,
                    regEx: SimpleSchema.RegEx.Url
                }
            }).validate({
                url
            });
        // } catch (error) {
        //     throw new Meteor.Error(400, error.message);
        // }

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId
        });
    }
})