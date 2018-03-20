import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";

Accounts.validateNewUser((user) => {   //runs before new user is registered
    const email = user.emails[0].address;

    try {
        new SimpleSchema({
            email: {
                type: String,
                regEx: SimpleSchema.RegEx.Email
            }
        }).validate({
            email
        });
    } catch (error) {
        throw new Meteor.Error(400, error.message);
    }

    return true;
})