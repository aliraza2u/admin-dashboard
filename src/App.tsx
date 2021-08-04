import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={LoginPage} />
          <ProtectedRoute path={'/dashboard'} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
