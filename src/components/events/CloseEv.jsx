import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

function CloseEv(props) {
  const classes = useStyles();
  return (
    <div className={classes.shabatContainer}>
      <h3 className={classes.title}>אירועים קרובים</h3>
      <div >
        <marquee direction="right">
          {props.data.map((value, index) => {
            return (
              <span className="shabatTitle">{value}.</span>
            )
          }
          )}
        </marquee>
      </div>
      <Divider />
    </div>
  );
}

export default CloseEv;
const useStyles = makeStyles((theme) => ({

  shabatContainer: {
  },
  title: {
    fontWeight: "bold",
    margin: "0 10px 0 10px ",
    display: "block"

  },
}));