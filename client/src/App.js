import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import UserPage from "./pages/UserPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import NavTabs from "./components/NavBar";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: null,
    password: null
  })

  // const getUser = () => {
  //   axios.get("/user").then(res => {
  //     if (res.data.user) {
  //       setUser({
  //         isLoggedIn: true,
  //         username: res.data.user.username
  //       })
  //     } else {
  //       setUser({
  //         isLoggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }

  // const register = async () => {
  //   const {username, password} = user;
  //   let response = await axios.post("/user/register", { username, password });
  //   if ( response.status === 200 ) {
  //     setUser({
  //       isLoggedIn: true
  //     })
  //   } else {
  //     console.log("sign up error");
  //   }
  // }

  // const login = async () => {
  //   const {username, password} = user;
  //   let response = await axios.post('/user/login/', { username, password });
  //   if (response.status === 200) {
  //     setUser({ isLoggedIn: true });
      
  //   } else {
  //     console.log('login error');
  //   }
  // }

  const logout = () => {
    axios.post("/user/logout").then(response => {
      if (response.status === 200) {
        setUser({
          isLoggedIn: false,
          username: null,
          password: null
        })
      } else {
        console.log("logout error");
      }
    })
  }

  return (
    <Router>
      <div className="App">
        <NavTabs isLoggedIn={user.isLoggedIn} logout={logout} />
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
