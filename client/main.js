import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker'
import { onAuthChange, routes } from "../imports/routes/routes";


Tracker.autorun(function () {
  const authenticated = !!Meteor.userId();
  onAuthChange(authenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});


