import ButtonGroup from "./ButtonGroup";
import styles from "./Feachures.module.css"
import { useState , useEffect } from "react";

function Feachures() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ( 
    <>
    <div className={`container-fulid ${styles.feachures} ${isScrolled ? styles.showSecond : ""} `}>
     <div className="row">
      </div>  

      <div className="row fs-4 mt-2">
         <h4 style={{color : "#948ccd"}}>Feachures</h4>
         <p className="text-start text-white fw-bold fs-5 lh-sm">Explore a variety of <span style={{color :"#948ccd"}}>landscapes, including mountains, forests, deserts,</span>  and <span style={{color :"#948ccd"}}>ancient ruins. </span> </p>

         <p className="text-start text-white fw-bold fs-5 lh-sm">Use the Alabay’s <span styles={{color :"#948ccd"}}> abilities </span> to solve <span style={{color :"#948ccd"}}> puzzles </span> that involve moving objects, activating mechanisms, or finding hidden clues.</p>
        <p  className="text-start text-white fw-bold fs-5 lh-sm">Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative.</p>

        <p  className="text-start text-white fw-bold fs-5 lh-sm">
        Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles
        </p>

        </div>  

        <div className="row mt-3">
          <h4 className="text-start mb-3">Challenge Modes</h4>
        
          <p  className="text-start text-white fw-bold fs-5 lh-sm">
          <span style={{color:"#948ccd"}}>Time Trials </span>: Compete in special timed challenges
          </p>

<p  className="text-start text-white fw-bold fs-5 lh-sm">
 <span style={{color:"#948ccd"}}>Exploration Mastery </span>: A mode that rewards players for exploring every nook and cranny.
</p>
          
        </div>

        <div className="row mt-3">
        <ButtonGroup/>
        </div>
        
    </div>
    </>
   );
}

export default Feachures;