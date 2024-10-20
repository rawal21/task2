// import React from 'react';
import styles from './Game.module.css'; // Import CSS module
import ComingSoonButton from "./ComingSoonButton";
import GamePreviews from "./GamePreviews";
import Feachures from './Feachures';
import { useState , useEffect } from 'react';



function Game() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return ( <>
  <div className="background"></div>
   <div className={`container-fluid mt-2 ${styles.alabayContainer}`} >
    <div className="row">
      <h1 className="text-start text-white mt-3 fw-bolder" style={{fontSize :"5rem" ,  fontFamily :"fantasy"}}> ALABAY GUARDIAN</h1>
      <h4  className="text-start fs-4 mt-2 fw-old" style={{fontFamily : "fantasy", color :"#948ccd"}}>SHEPHERD OF THE STEPPES</h4>
      <p className="text-start fs-6 text-white fw-bold mb-b ">
      Take on the role of the legendary Alabay on <br /> a quest to uncover the ancient secrets of its <br /> ancestors.
      </p>
      <ComingSoonButton/>
    </div>

    <div className="row mt-5 mb-5">
     
    </div>

    <div className="row">
      <GamePreviews/>
    </div>
   </div>
   <Feachures/>

  </> );
}

export default Game;