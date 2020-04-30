# react-protectedroute
A simple react component that adds route protection functionaliity to Route component from react-router-dom  

## Install
```
  npm install --save react-protectedroute

  or

  yarn add react-protectedroute

```

## Importing
```
  import ProtectedRoute from 'react-protectedroute'
```

## Usage example
```
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
          guardFunction={() => {
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

```


## Props (in addition to basic Route props)
- #### guardFunction
    Function that returns boolean. If returned false, user will be redirected or component is accessable otherwise.

- #### guardFunctionArgs
    If the guard function requires args, pass the args as an object and use them accordingly.

- #### redirect Route
    Redirects the user to this route if guardFunction returns false