import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <h1>UnProtected Route</h1>} exact />
        <ProtectedRoute
          path="/protected"
          redirectRoute="/"
          guardFunctionArgs={{'one':'one'}}
          guardFunction={(args) => {
            console.log(args)
            const token = localStorage.getItem('authToken');
            if(token){
              return true;
            }else{
              return false;
            }
          }}
          component={() => <h1>Protected Route</h1>}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
