// import React, { useState, useEffect, useReducer, useContext } from "react";
// import Card from "../../UI/Card";
// import classes from './Section2.module.css';

// const Section2 = () => {

//     const anime_names=  async () => {
//         let names_array = [];
//         const data = await fetch('https://animechan.vercel.app/api/available/anime');
//         const convert = await data.json();
//         // displayAnimeName(convert)
//     };
//     anime_names();

//     return (
//         <Card className={classes.section2}>
//             <p className={classes.heading}>This is section 2, print all anime names</p>
//             <div className={classes.frame}>
//                 <div className={classes.cards}></div>
//             </div>

//         </Card>
//     );
// };

// export default Section2;




// let names_arra = [];
// async function anime_names() {
//     const data = await fetch('https://animechan.vercel.app/api/available/anime');
//     const convert = await data.json();
//     names_array = convert;
//     // console.log(names_array);
//     // console.log(names_array.length);
//     d();
// };
// while (names_arra.length < 0) {
//     var a = 0;
//     a = +a
//     console.log(a);
//     console.log(names_arra);
// }


// anime_names()
// console.log(names_arra);
// // _____________________