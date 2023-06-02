import Header from "./Header";
import FirstScreen from "./FirstScreen";
import Advantages from "./Advantages";
import BestsellersList from "./BestsellersList";
import Reference from "./Reference";
import HowToCare from "./HowToCare";
import Footer from "./Footer";
import bestsellers from './../data/bestsellers.json';

function App() {
    return (
        <>
            <Header/>
            <FirstScreen/>
            <Advantages/>
            <BestsellersList products={bestsellers}/>
            <Reference/>
            <HowToCare/>
            <Footer/>
        </>
    )
}

export default App;
