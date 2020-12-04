import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMealPlan from "../components/DisplayMealPlan";
import NavTabs from "../components/NavBar";
import API from "../utils/API";

function MealPlanPage() {
  const [foodData, setFoodData] = useState([]);

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

  async function getMeals() {
    await axios
      .get("/api/meals/" + userId)
      .then((response) => {
        const data = response.data;
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }

  async function getMealsByType(userId, type) {
    await API.getMealByType(userId, type)
      .then((res) => {
        const data = res.data;
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    console.log(foodData);
  }, [foodData]);

  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Your Meal Plan 🗓
      </Typography>
      <Grid
        container
        alignContent="center"
        justify="space-around"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            onClick={() => {
              getMeals();
            }}
          >
            View All
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            onClick={() => {
              getMealsByType(userId, "breakfast");
            }}
          >
            Breakfast
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            onClick={() => {
              getMealsByType(userId, "lunch");
            }}
          >
            Lunch
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            onClick={() => {
              getMealsByType(userId, "dinner");
            }}
          >
            Dinner
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            onClick={() => {
              getMealsByType(userId, "snack");
            }}
          >
            Snack
          </Button>
        </Grid>
        {foodData ? (
          foodData.map((food) => {
            return <DisplayMealPlan key={foodData.indexOf(food)} {...food} />;
          })
        ) : (
          <h3>
            No foods to display, Go check out the food search to forage for
            some.
          </h3>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default MealPlanPage;
