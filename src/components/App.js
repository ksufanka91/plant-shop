import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
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
                        path="*"
                        element={<NotFound/>}>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
