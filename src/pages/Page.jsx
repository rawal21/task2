

import Card from './Card';
import Gallery from './Gallery';
import GameSection from './GameSection';
import Histroy from './Histroy';
import Marchet from './Marchet';
import RoadMap from './RoadMap';
import Tokenomics from './Tokenomics';
import Games from './Games';
import SocialMedia from './SocialMedia';
import styles from './Page.module.css'; // Importing CSS module
// import ProjectVision from './ProjectVision';
import ProjectVistion from './PojectVision'

function Page() {
  return (
    <>
      <div className={`${styles.containers} container`}>
        <Histroy />
        <Gallery />
        {/* <ProjectVision /> */}
        <ProjectVistion/>
        <RoadMap />
        <Card />
        <Tokenomics />
        <Marchet />
        <GameSection />
        <Games />
        <SocialMedia />
      </div>
    </>
  );
}

export default Page;

