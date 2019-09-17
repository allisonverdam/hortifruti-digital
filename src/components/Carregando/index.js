import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  carregando: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function Carregando() {
  const classes = useStyles();

  return (
    <div className={classes.carregando}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
