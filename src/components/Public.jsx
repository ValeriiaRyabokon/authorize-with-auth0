import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "40%",
    left: "27%",
    padding: "20px",
    background: "#F8F8FF",
    border: "2px solid #B0C4DE",
  },
  title: {
    fontSize: 20,
    padding: "10px",
    textAlign: "center",
  },
});

export default function Public() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Публічна сторінка
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Доступ до данної сторінки є у всіх. Авторизація непотрібна.
        </Typography>
      </CardContent>
    </Card>
  );
}
