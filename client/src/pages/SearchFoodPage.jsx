import {
  Button,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import DisplayFood from "../components/DisplayFood";
import NavTabs from "../components/NavBar";
import API from "../utils/API";

const filterChoice = [
  "No-Diet",
  "vegetarian",
  "vegan",
  "alcohol-free",
  "tree-nut-free",
  "peanut-free",
];

function SearchFoodPage() {
  const [filter, setFilter] = useState(filterChoice[0]);
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Used to console log the data coming back from the api whenever the data does end up coming back
  // useEffect(() => {
  //   console.log(meals);
  // }, [meals]);

  async function getFood(diet, food) {
    await API.getAPIFood(diet, food)
      .then((res) => {
        // Goes into the data and grabs the array of foods
        let foods = res.data.hits;
        setMeals(foods);
      })
      .catch((err) => console.log(err));
  }

  function getUserName() {
    let values = JSON.parse(localStorage.getItem("userInfo"));
    values = values._doc.username;

    return values;
  }

  function getUserId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"));
    userId = userId._doc._id;

    return userId;
  }

  const user = getUserName();
  const userId = getUserId();
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Food Search 🍗
      </Typography>
      <Grid
        container
        alignContent="center"
        justify="space-around"
        alignItems="baseline"
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormGroup row={true}>
            <TextField
              id="food-filter"
              select
              label="Filter"
              value={filter}
              onChange={handleChange}
              helperText="Please select your filter"
              margin="dense"
            >
              {filterChoice.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="Search Food Here"
              variant="outlined"
              margin="dense"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              style={{ width: "50%" }}
            />
            <Button
              onClick={() => {
                getFood(filter, inputValue);
              }}
            >
              Forage
            </Button>
          </FormGroup>
        </Grid>
        {meals ? (
          meals.map((meal) => {
            return (
              <DisplayFood
                key={meals.indexOf(meal)}
                {...meal}
                userId={userId}
              />
            );
          })
        ) : (
          <h3>No foods to display</h3>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default SearchFoodPage;
