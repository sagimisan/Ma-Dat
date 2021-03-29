import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, fade, makeStyles, Divider, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShabatTime from "../events/ShabatTime"
import TemporaryDrawer from "../main/TemporaryDrawer"
export default function SearchAppBar() {
    const axios = require('axios');
    const classes = useStyles();
    const [city, setCity] = useState(localStorage.getItem('city') === null ? 'jerusalem' : localStorage.getItem('city'))
    const [data, setData] = useState("")
    useEffect(() => {
        Search()
    }, [])
    function handleChange(e) {
        setCity(e.target.value)
    }
    function Search() {
        localStorage.setItem('city', city)
        axios.get(`https://www.hebcal.com/shabbat?cfg=json&M=on&lg=h&geo=city`,
            {
                params: {
                    city: `il-${city}`
                }
            })
            .then(function (response) {
                console.log(response)
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" position="fixed" className={classes.appBar}>
                <Toolbar >
                    <TemporaryDrawer className={classes.menueBotton} />
                    <h3 className={classes.title}>דתיקיפדיה</h3>
                    <div className={classes.search}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label" >עיר</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={city}
                                onChange={handleChange}
                            >
                                {cities.map((value, index) => {
                                    return (<MenuItem value={value.value}>{value.text}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <div className={classes.searchIcon}>
                            <SearchIcon onClick={Search} />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {data != "" ? <ShabatTime data={data} /> : ""}
            <Divider style={{ margin: "5px" }} />

        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        marginBottom: "5px"
    },
    search: {
        display: "inline-block",
        position: 'absolute',
        left: "10px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
            width: '200px',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        left: 0,
        top: "10px",
        height: '100%',
        position: 'absolute',
        // pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: "pointer", zIndex: 3
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    title: {
        padding: "6px 0px"
    }

}));
const cities = [
    { text: "אילת", value: "Eilat" },
    { text: "אשדוד", value: "Ashdod" },
    { text: "אשקלון", value: "Ashkelon" },
    { text: "באר שבע", value: "Be'er Sheva" },
    { text: "בית שמש", value: "Beit Shemesh" },
    { text: "בני ברק", value: "Bnei Brak" },
    { text: "בת ים", value: "Bat Yam" },
    { text: "הרצליה", value: "Herzliya" },
    { text: "חדרה", value: "Hadera" },
    { text: "חולון", value: "Holon" },
    { text: "חיפה", value: "Haifa" },
    { text: "טבריה", value: "Tiberias" },
    { text: "ירושלים", value: "Jerusalem" },
    { text: "כפר סבא", value: "Kfar Saba" },
    { text: "לוד", value: "Lod" },
    { text: "מודיעין", value: "Modiin" },
    { text: "נצרת", value: "Nazareth" },
    { text: "נתניה", value: "Netanya" },
    { text: "פתח תקווה", value: "Petach Tikvah" },
    { text: "ראשון לציון", value: "Rishon LeZion" },
    { text: "רמלה", value: "Ramla" },
    { text: "רמת גן", value: "Ramat Gan" },
    { text: "רעננה", value: "Ra'anana" },
    { text: "תל אביב", value: "Tel Aviv" },
]