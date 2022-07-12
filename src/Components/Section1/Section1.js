import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../../UI/Card";
import classes from './Section1.module.css';
import Button from "../../UI/Button";

const Section1 = () => {
    const [changeQuote, setChangeQuote] = useState('In this Sectionthe Quote will change');

    const changeQuoteHandeler = () => {
        const url = 'https://animechan.vercel.app/api/random';
        let quote2;
        
        async function display_quote() {
            const grab = await fetch(url);
            const convrt = await grab.json();
            const { quote: quote1 } = convrt;
            quote2 = quote1
            setChangeQuote(quote2)
        };
        display_quote()

    };

    return (
        <Card className={classes.section1}>
            <p className={classes.headding}>This is Section 1</p>
            <div className={classes.quote}> {changeQuote} </div>
            <Button className={classes.button} onClick={changeQuoteHandeler}>This is Button</Button>
        </Card>
    );
};

export default Section1;