import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/mealPlan" component={MealPlanPage} />
          <Route exact path="/searchFood" component={SearchFoodPage} />
          <Route exact path="/:user" component={UserPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
