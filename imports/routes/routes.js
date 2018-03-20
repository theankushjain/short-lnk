import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from "./../ui/signup";
import Link from "./../ui/link";
import NotFound from "./../ui/notfound";
import Login from "./../ui/login";

const history = createBrowserHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/link'];

export const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/link' component={Link} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export const onAuthChange = function (authenticated) {
    console.log("isAuthenticated: ", authenticated);
    const path = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(path);
    const isAuthenticatedPage = authenticatedPages.includes(path);
    if (authenticated && isUnauthenticatedPage) {   // pages: /signup and /
        console.log(`Authenticated user routed to the path /link`);
        history.replace('/link');
    } else if (!authenticated && isAuthenticatedPage) {
        console.log(`Unauthenticated user routed to the path /`);
        history.replace('/');
    }
};