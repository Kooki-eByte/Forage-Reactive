import {
  Button,
  Divider,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavTabs from "../components/NavBar";
import fakeData from "../fakeData.json"
import DisplayFood from "../components/DisplayFood"

const filterChoice = [
  "No diet",
  "Vegetarian",
  "Vegan",
  "Alcohol-Free",
  "Tree-Nuts-Free",
  "Peanuts-Free",
];

function SearchFoodPage() {
  // First is the a user navbar that has a button to the go to the user page, food search, display food, and food meal social media page

  const [filter, setFilter] = React.useState(filterChoice[0]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <NavTabs />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Food Search 🍗
      </Typography>
      <Grid container justify="center">
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
              alert("clicked");
            }}
            >
              Click me
            </Button>
          </FormGroup>
          
        </Grid>
        <Divider/>
          {fakeData.map(data => (
              <DisplayFood key={data.id} {...data}/>
          ))}
      </Grid>
    </React.Fragment>
  );
}

export default SearchFoodPage;
