import LandingScreen from "../LandingScreen";
import Advantages from "../Advantages";
import BestsellersList from "../BestsellersList";
import Reference from "../Reference";
import HowToCare from "../HowToCare";

import bestsellers from "../../data/bestsellers.json";
import advantages from '../../data/advantages.json'
import howToCare from '../../data/howToCare.json'


const Home = () => {
    return (
        <>
            <LandingScreen title={'Bring Serenity to Your Place With Interior Plants'}
                           subtitle={'find your dream plant for you home decoration with us, and we will make it happen.'}
                           showSearchBtn={true}/>
            <Advantages advantages={advantages}/>
            <BestsellersList products={bestsellers}/>
            <Reference/>
            <HowToCare howToCare={howToCare}/>
        </>
    )
}

export default Home;