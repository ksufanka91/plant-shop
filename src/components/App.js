import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection";
import ScrollToTop from "./UI/ScrollToTop";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route
                        path="/"
                        element={<Home/>}>
                    </Route>
                    <Route
                        path="shop"
                        element={<Shop/>}>
                    </Route>
                    <Route
                        path="about"
                        element={<About/>}>
                    </Route>
                    <Route
                        path="contacts"
                        element={<Contacts/>}>
                    </Route>
                    <Route
                        path="collection"
                        element={<Collection/>}>
                    </Route>
                    <Route
                        path="*"
                        element={<NotFound/>}>
                    </Route>
                </Route>
            </Routes>
            <ScrollToTop />
        </HashRouter>
    )
}

export default App;
