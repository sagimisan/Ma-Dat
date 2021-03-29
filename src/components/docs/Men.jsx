import React from 'react';
import mens from "../../documents/mensRights.pdf"
import Image from 'material-ui-image'
import img from "../../img/mensRights.jpeg"
export default function Men(props) {

  return (
    <div >
      <a download href={mens}>

        <Image
          src={img}
        />
      </a>
    </div>
  );
}
