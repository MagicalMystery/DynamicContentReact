import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route';
import { browserHistroy, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const newHistory = createBrowserHistory();

import { Products } from "./components/Products";
import { Login } from "./components/Login";
import "babel-polyfill";

class App extends React.Component {

    render() {
        return (

           <Router history={newHistory}>
               <Switch>
                   <Route path="/" exact component={Login}/>
                   <Route path="/products" exact component={Products}/>
               </Switch>
           </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));