import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Error, Login } from './pages';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="*" component={Error} />

            </Switch>
        </Router>
    );
};

export default App;
