import React from 'react';
import clsx from 'clsx';
import { makeStyles, Drawer, Button, List, Divider, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles({
  list: {
    height: "100%",
    width: 250,
    direction: "rtl",
    background: "#424242",
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const arr = [{ text: 'דף הבית', link: "/" },
  { text: 'זכויות החייל הדתי', link: "/Men" },
  { text: 'זכויות החיילת הדתייה', link: "/Women" },
  { text: 'נוהל שבת ומועדים', link: "/Shabat" },
  { text: 'דרכי תקשורת', link: "/Contact" }
  ]

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {arr.map((value, index) => (
          <Link className={classes.link} to={value.link}>
            <ListItem button key={index}>
              <ListItemText style={{ flex: "none", margin: "10px 0 10px 20px" }} primary={value.text} />
            </ListItem>
          </Link>
        ))}


      </List>
      <Divider />
    </div >
  );
  return (
    <div className={classes.drawerConteiner}>
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>  <MenuIcon /></Button>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
