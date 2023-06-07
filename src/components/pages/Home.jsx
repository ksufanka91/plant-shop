import FirstScreen from "../FirstScreen";
import Advantages from "../Advantages";
import BestsellersList from "../BestsellersList";
import Reference from "../Reference";
import HowToCare from "../HowToCare";

import bestsellers from "../../data/bestsellers.json";

const Home = () => {
    return (
        <>
            <FirstScreen title={'Bring Serenity to Your Place With Interior Plants'}
                         subtitle={'find your dream plant for you home decoration with us, and we will make it happen.'}
                         showSearchBtn={true}/>
            <Advantages/>
            <BestsellersList products={bestsellers}/>
            <Reference/>
            <HowToCare/>
        </>
    )
}

export default Home;