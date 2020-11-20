import {
  Button,
  Divider,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import NavTabs from "../components/NavBar";
import DisplayFood from "../components/DisplayFood"
import API from "../utils/API"

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
  const [meals, setMeals] = useState([])
  const [searchFood, setSearchFood] = useState("pizza")

  useEffect(() => {
    getFood();
  }, []);

  async function getFood() {
    await API.getAPIFood(filter, searchFood)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <NavTabs />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Food Search 🍗
      </Typography>
      <Grid container alignContent="center" justify="space-around" alignItems="baseline">
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
              style={{width:"50%"}}
            />
            <Button
            onClick={() => {
              setSearchFood("steak")
            }}
            >
              Forage
            </Button>
          </FormGroup> 
        </Grid>
        <Divider/>
          {meals.length && 
            meals.map(meal => (
              <DisplayFood key={meal.id} {...meal}/>
            ))
          }
      </Grid>
    </React.Fragment>
  );
}

export default SearchFoodPage;
