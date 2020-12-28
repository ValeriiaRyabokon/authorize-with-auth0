import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "40%",
    left: "27%",
    padding: "20px",
    background: "#E3F2DE",
    border: "2px solid #ACD6A0",
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
