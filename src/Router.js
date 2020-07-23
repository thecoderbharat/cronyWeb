// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES
import Login from './Login';
import Main from './Main';
// import Admin from './Components/Admin/index.html';


export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>

            <Switch>
                <Route path='/' component={Main} exact={true} />
                <Route path='/main' component={Main} />
                <Route path='/login' component={Login} />
                {/* <Route path='/admin' component={Admin} /> */}
                <Redirect to="/" />
            </Switch>

        </Fragment>
    </BrowserRouter>
);