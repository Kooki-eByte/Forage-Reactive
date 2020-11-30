import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import FourZeroFour from "./pages/FourZeroFour";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import Shell from "./Shell";

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route exact path="/loginPage">
        <LoginPage />
      </Route>
      <Route exact path="/signUpPage">
        <SignUpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
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
        auth.isAuthenticated() ? <Shell>{children}</Shell> : <UnauthenticatedRoutes/>
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <AuthenticatedRoute path="/mealPlan">
          <MealPlanPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/searchFood">
          <SearchFoodPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/:user">
          <UserPage />
        </AuthenticatedRoute>
        {/* <Route exact path="/mealPlan" component={MealPlanPage} />
          <Route exact path="/searchFood" component={SearchFoodPage} />
          <Route
            exact
            path="/:user"
            render={(props) => <UserPage {...props} />}
          /> */}
        <UnauthenticatedRoutes />
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
