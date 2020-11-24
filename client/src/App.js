import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthProvider, AuthContext } from "./context/AuthContext";
import Shell from "./Shell";

import FourZeroFour from "./pages/FourZeroFour";
import HomePage from "./pages/HomePage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import UserPage from "./pages/UserPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route exact path="/loginPage" component={LoginPage} />
      <Route exact path="/signUpPage" component={SignUpPage} />
      <Route path="/" component={HomePage} />
      <Route path="*">
        <FourZeroFour />
      </Route>
    </Switch>
  </>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? <Shell>{children}</Shell> : <Redirect to="/" />
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <UnauthenticatedRoutes />
        <AuthenticatedRoute>
          <Route exact path="/mealPlan" component={MealPlanPage} />
          <Route exact path="/searchFood" component={SearchFoodPage} />
          <Route
            exact
            path="/:user"
            render={(props) => <UserPage {...props} />}
          />
        </AuthenticatedRoute>
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Switch>
//           <Route exact path='/loginPage' component={LoginPage} />
//           <Route exact path='/signUpPage' component={SignUpPage} />
//           <Route exact path='/mealPlan' component={MealPlanPage} />
//           <Route exact path='/searchFood' component={SearchFoodPage} />
//           <Route
//             exact
//             path='/:user'
//             render={(props) => <UserPage {...props} />}
//           />
//           <Route path='/' component={HomePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
