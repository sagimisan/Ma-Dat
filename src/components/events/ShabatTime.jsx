import React from 'react';
import { makeStyles } from '@material-ui/core';

function ShabatTime(props) {
  const classes = useStyles();
  const shabat = props.data.items.filter(i => i.category == "candles" || i.category == "parashat" || i.category == "havdalah")
  return (
    <div className={classes.shabatContainer}>
      <h5 className={classes.title} className="shabatTitle">זמני השבת:</h5>
      {shabat.map((value, index) => {
        return (
          <h5 key={index} className="shabatTitle">{value.title}.</h5>
        )
      }
      )}
    </div>
  );
}

export default ShabatTime;
const useStyles = makeStyles((theme) => ({
  shabatContainer: {
    display: "flex",
    justifyContent: "start",
  },
  title: {
    fontSize: "0.7rem",
    margin: "0 10px 0 10px ",
    display: "inline-block",
    float: "right",
  },
}));