import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'material-ui-image'
import img from "../../img/shabatRights1.jpeg"
import img2 from "../../img/shabatRights1.jpeg"
import shabas from "../../documents/shabatRights.pdf"

export default function Shabes(props) {
  const classes = useStyles();

  return (
    <div className>
      <a download href={shabas}>

        <Image
          src={img}
        /><Image
          src={img2}
        />
      </a>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({

}));