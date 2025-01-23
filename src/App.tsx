import { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import PdfViewer from './components/Resume/PdfViewer.tsx';
import "./style.css";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate, // Correctly imported Navigate from react-router-dom
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

function App() {
    // State to handle preloader visibility
    const [load, updateLoad] = useState<boolean>(true);

    useEffect(() => {
        // Set a timeout to hide the preloader
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {/* Preloader Component */}
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                {/* Navbar Component */}
                <Navbar />

                {/* Scroll-to-top functionality */}
                <ScrollToTop />

                {/* App Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<PdfViewer />} />
                    {/* Redirect any unmatched routes */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>

                {/* Footer Component */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
