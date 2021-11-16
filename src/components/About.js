import React from "react";
import Links from "./Links"

function About(props) {
  if (!props.bio) {
    return null 
  }else if (props.bio === "") {
    return null
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin}/>
      </div>
    );
  }
}

export default About;


// function BlogContent(props) {
//   console.log(props);

//   if (!props.isPublished) {
//     // hide unpublished content
//     // return null means "don't display any DOM elements here"
//     return null;
//   } else {
//     // show published content
//     return (
//       <div>
//         <h1>{props.articleText}</h1>
//         <p>{props.minutesToRead} minutes to read</p>
//       </div>
//     );
//   }
// }
