import {
  Button,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DisplayFood from "../components/DisplayFood";
import API from "../utils/API";

const filterChoice = [
  "No-Diet",
  "Vegetarian",
  "Vegan",
  "Alcohol-Free",
  "Tree-Nuts-Free",
  "Peanuts-Free",
];

function SearchFoodPage() {
  const [filter, setFilter] = useState(filterChoice[0]);
  const [meals, setMeals] = useState([]);
  const [searchFood, setSearchFood] = useState("pizza");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getFood(filter, inputValue);
  }, [searchFood]);

  // Used to console log the data coming back from the api whenever the data does end up coming back
  useEffect(() => {
    console.log(meals);
  }, [meals]);

  async function getFood(diet, food) {
    await API.getAPIFood(diet, food)
      .then((res) => {
        // Goes into the data and grabs the array of foods
        const foods = res.data.hits;
        setMeals(foods);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
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
                setSearchFood(filter, inputValue);
              }}
            >
              Forage
            </Button>
          </FormGroup>
        </Grid>
        {meals ? (
          meals.map((meal) => {
            return <DisplayFood key={meals.indexOf(meal)} {...meal} />;
          })
        ) : (
          <h3>No foods to display</h3>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default SearchFoodPage;
