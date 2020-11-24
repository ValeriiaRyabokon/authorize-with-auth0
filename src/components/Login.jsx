import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "./Auth";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "40%",
    left: "40%",
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

const Login = withAuth(({ isAuthorizade, changeAuthorizade}) => {
  const classes = useStyles();
  return isAuthorizade ? (
    <Redirect to="/public" />
  ) : (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Ви не авторизовані
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        style={{
            marginLeft:'25px'
        }}
        onClick={changeAuthorizade} 
        variant="contained" 
        color="primary"
        >
          Авторизуватися
        </Button>
       

      </CardActions>
    </Card>
  );
});
export default Login;
