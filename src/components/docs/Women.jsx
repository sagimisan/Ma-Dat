import React from 'react';
import { makeStyles} from '@material-ui/core';
import Image from 'material-ui-image'
import img from "../../img/womenRights.jpeg"
import girls from "../../documents/womensRights.pdf"

export default function Women(props) {
  const classes = useStyles();

  return (
    <div>
      <a download href={girls}>

        <Image
          src={img}
        />
      </a>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({

}));