import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../../UI/Card";
import SearchList from "./SearchList";
import classes from './Section3.module.css';

const Section3 = (props) => {
    const [animeName, setanimeName] = useState("");
    const [animeData,setAnimeData] = useState([]);
    

    const animeNameHandeler = (e) => {
        e.preventDefault();
        setanimeName(e.target.value)
    };

    const prepareURL = (animeName) => {
        const URL = `https://api.tvmaze.com/search/shows?q=${animeName}`;
        // const URL = `https://animechan.vercel.app/api/quotes/anime?title=${animeName}`;
        return encodeURI(URL)
    };

    const searchQuote = (animeName) => {
        if (animeName.trim().length === "") return;
        const fetchQuote = async (animeName) => {
            try {
                const URL = prepareURL (animeName);
                const dataName = await fetch(URL);
                const conv = await dataName.json(); //Returning array 
                if (conv) return renderQuote(conv);
            } catch (error) { console.log("Error", error); }
        };
        fetchQuote(animeName)
    };
    searchQuote(animeName);
    const renderQuote = (conv)=> {
        setAnimeData(conv);
    };
    console.log();


    return (
        <Card className={classes.section3}>
            <div className={classes.section3}>
                <div className={classes.searchform}>

                    <input type="text"
                        className={classes.search}
                        value={animeName}
                        onChange={animeNameHandeler}
                    />

                    <ul className={classes.suggestions}>
                        <li>Filter for amine </li>
                        <li>or a character name</li>
                        <SearchList quotes= {animeData}></SearchList>
                    </ul>
                </div>
            </div>
        </Card>
    );
}

export default Section3;