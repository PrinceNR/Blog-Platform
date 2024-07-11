import React from "react";
import firstImg from "../assets/workshop.jpg";
import secondImg from "../assets/gondol.jpg";
import thirdImg from "../assets/skies.jpg";
import fourthImg from "../assets/rock.jpg";

function PopularPost() {
  const PopularContent = ([
    { image: firstImg,title: "Lorem", mainHead: "Sed mattis nunc" },
    { image: secondImg, title: "Lorem", mainHead: "Sed mattis nunc" },
    { image: thirdImg, title: "Lorem", mainHead: "Sed mattis nunc" },
    { image: fourthImg, title: "Lorem", mainHead: "Sed mattis nunc" }
  ]);
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>Popular Posts</h4>
      </div>
      <ul className="w3-ul w3-hoverable w3-white">

        {
            PopularContent.map((data, index) => (
            <li key={index} className="w3-padding-16">
            <img
            src={data.image}
            alt="Image"
            className="w3-left w3-margin-right"
            style={{width: "50px"}}
            />
            <span className="w3-large">{data.title}</span>
            <br />
            <span>{data.mainHead}</span>
            </li>
            )
        )
        }
        
      </ul>
    </div>
  )
}

export default PopularPost;
