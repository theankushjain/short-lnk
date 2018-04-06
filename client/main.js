import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Session } from "meteor/session";
import ".././imports/startup/simpl-schema-configuration";

import { onAuthChange, routes } from "../imports/routes/routes";


Tracker.autorun(function () {
  const authenticated = !!Meteor.userId();
  onAuthChange(authenticated);
});



Meteor.startup(() => {
  Session.set('showVisible', true)
  ReactDOM.render(routes, document.getElementById('app'));
});


