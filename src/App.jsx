import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import  Gallery from "./components/Gallery";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className="mt-10 mx-auto w-[80%] bg-zinc-200 p-10">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
};

export default App;
