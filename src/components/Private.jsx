import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { withAuth } from "./Auth";
const useStyles = makeStyles({
  root: {
    position: "fixed",
    width:'500px',
    top: "40%",
    left: "30%",
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

const Private = ({ user }) => {
  const classes = useStyles();
  const [admin, setAdmin] = useState("");
  console.log(user.sub)

  useEffect(()=>{
    if(user.sub==="google-oauth2|117523992193778068426"){
      setAdmin('Ви зайшли як адмін')
      }
  }, [user])
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Приватна сторінка
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {admin ? admin : 'Доступ до данної сторінки доступний лише авторизованим користувачам'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withAuth(Private);
