import React, { useState, useEffect } from 'react';
import CloseEv from "../events/CloseEv"
function NewEV() {
  const date = new Date();
  const [data, setData] = useState([]);
  const axios = require('axios');
  useEffect(() => {
    axios.get('https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&ss=on&mf=on&o=on&lg=h',
      {
        params: {
          city: "il-Jerusalem"
        }
      })
      .then(function (response) {
        let count = 0;
        response.data.items.map((item, index) => {
          if (date.toLocaleDateString().slice(0, 2) < 10 ) {
            //Shows only the next 6 events
            if ((item.date.slice(5, 7) >= (date.getMonth() + 1)) && (item.date.slice(8, 10) % 10 >= ((date.toLocaleDateString().slice(0, 2))) && count < 6) || count == 0) {
              setData(data => [...data, item.title])
              count++;
            }
          }
          else {
            //Shows only the next 6 events
            if ((item.date.slice(5, 7) >= (date.getMonth() + 1)) && (item.date.slice(8, 10) >= ((date.toLocaleDateString().slice(0, 2))) && count < 6) || count == 0) {
              setData(data => [...data, item.title])
              count++;
            }
          }
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className="">
      {data.length === 6 ? <CloseEv data={data} /> : ""}
    </div>
  );
}

export default NewEV;
