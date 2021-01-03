import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [state, setState] = useState([]);
  // eslint-disable-next-line
  const [actions, setActions] = useState(["Infected", "Recovered", "Deaths"]);
  // eslint-disable-next-line
  const [description, setDescription] = useState([
    "Number of active cases of COVID-19",
    "Number of recoveries from COVID-19",
    "Number of deaths caused by COVID-19",
  ]);
  // eslint-disable-next-line
  const [stylesColor, setStylesColor] = useState([
    styles.infected,
    styles.recovered,
    styles.deaths,
  ]);

  useEffect(() => {
    if (confirmed) {
      setState([confirmed.value, recovered.value, deaths.value]);
    }
    // eslint-disable-next-line
  }, [confirmed]);

  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {actions.map((val, index) => {
          return (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              key={index}
              className={cx(styles.card, stylesColor[index])}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {val}
                </Typography>
                <Typography variant="h5">
                  <Countup
                    start={0}
                    end={state.length > 0 ? state[index] : 0}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">{description[index]}</Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
