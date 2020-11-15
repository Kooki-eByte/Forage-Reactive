import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import UserPage from "./pages/UserPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loginPage" component={LoginPage} />
          <Route exact path="/signUpPage" component={SignUpPage} />
          <Route exact path="/mealPlan" component={MealPlanPage} />
          <Route exact path="/searchFood" component={SearchFoodPage} />
          <Route
            exact
            path="/:user"
            render={(props) => <UserPage {...props} />}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
