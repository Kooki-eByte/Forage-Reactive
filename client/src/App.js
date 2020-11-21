import React from "react";
import axios from 'axios';
import { Route, withRouter  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
// import MealPlanPage from "./pages/MealPlanPage";
// import SearchFoodPage from "./pages/SearchFoodPage";
// import UserPage from "./pages/UserPage";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
import UserPage from './components/Usertest'
import Navbar from './components/Navbartest'
import LoginPage from './components/Logintest'
import SignUpPage from './components/Signuptest'

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: null,
    password: null,
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = (updatedProp, update) => {
    this.setState(prevState => ({ ...prevState, [updatedProp]: update }));
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        this.setState({
          isLoggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          isLoggedIn: false,
          username: null
        });
      }
    });
  }

  register = async () => {
		const { username, password } = this.state;
		let response = await axios.post('/user/register', { username, password });
		if (response.status === 200) {
			this.setState({ isLoggedIn: true });
      this.props.history.push("/");
		} else {
			console.log('signup error');
		}
	}

  login = async () => {
    const { username, password } = this.state;
    let response = await axios.post('/user/login/', { username, password });
    if (response.status === 200) {
      this.setState({ isLoggedIn: true });
      this.props.history.push("/");
    } else {
      console.log('login error');
    }
  }

  logout = () => {
    axios.post('/user/logout').then(response => {
      if (response.status === 200) {
        this.setState({
          isLoggedIn: false,
          username: null,
          password: null
        });
        this.props.history.push("/");
      }
    }).catch(error => {
      console.log('logout error', error);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <Route exact path="/" render={() => <HomePage isLoggedIn={this.state.isLoggedIn} username={this.state.username} />} />
        <Route path="/loginPage" render={() => (
          <LoginPage 
            username={this.state.username} 
            password={this.state.password}
            updateUser={this.updateUser} 
            login={this.login} 
          />
        )} />
        <Route path="/signUpPage" render={() => (
          <SignUpPage 
            username={this.state.username} 
            password={this.state.password}
            updateUser={this.updateUser} 
            register={this.register}
          />
        )} />
        <Route path="/:user" render={() => <UserPage isLoggedIn={this.state.isLoggedIn} username={this.state.username} />} />
      </div>
    );
  };
};


export default withRouter(App);
