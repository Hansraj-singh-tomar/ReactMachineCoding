import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

const App2 = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/home" component={HomePage} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App2;
