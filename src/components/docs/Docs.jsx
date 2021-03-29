import React from 'react';
import { makeStyles,GridListTile ,GridListTileBar} from '@material-ui/core';
import mens from "../../documents/mensRights.pdf"
import girls from "../../documents/womensRights.pdf"
import shabas from "../../documents/shabatRights.pdf"
import GetAppIcon from '@material-ui/icons/GetApp';
import imageMen from "../../img/menSmall.jpeg"
import imageGirl from "../../img/womenSmall.jpeg"
import imageShabes from "../../img/shabatSmall.jpeg"
function Docs(props) {
    const classes = useStyles();
    const pdfdata = [
        { "img": imageMen, "title": "זכויות החייל הדתי", "link": mens },
        { "img": imageGirl, "title": "זכויות החיילת הדתייה", "link": girls },
        { "img": imageShabes, "title": "נוהל שבת ומועדים", "link": shabas }
    ]
    return (
        <div className={classes.root}>
            {pdfdata.map((data, index) => {
                console.log(data.type)
                return (
                    <a download href={data.link}>
                        <GridListTile className={classes.gridList} key={data.type}>
                            <img src={data.img} alt="pdf" className={classes.img} />
                            <GridListTileBar
                                title={data.title}
                                actionIcon={
                                    <GetAppIcon className={classes.icon} />
                                }
                            />
                        </GridListTile>
                    </a>
                )
            })}
        </div>
    );
}

export default Docs;
const useStyles = makeStyles((theme) => ({
    root: {

    },
    gridList: {
        // width: "50%",
        // height: 450,
        display: "inline-block"
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {
        width: "100%",
        height: "130px"
    }
}));

