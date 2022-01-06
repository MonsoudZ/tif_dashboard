import "./App.css";
import Navbar from "../src/components/Header/Navbar";
import PostButtons from "./components/PostButtons/PostButtons";
import Footer from "../src/components/Footer/Footer"
import Blog from "../src/components/card/Blog";
import BlogDetails from "../src/components/card/BlogDetails";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div id="app" className="h-screen w-full overflow-auto">
            <Navbar />
            <div className="flex flex-col min-h-screen justify-between">
                <Switch>
                    <Route exact path="/">
                        <p className="mt-8 text-center text-2xl text-gray-700 font-semibold">
                            Welcome to Tiffany Bot!</p>
                        <p className="mt-4 ml-8 mr-8 text-center text-l text-gray-700 font-light leading-relaxed">
                            Our Bot is here to give you the most update news and ranks articles based upon our advance alagrothem.</p>
                        <div>
                            <PostButtons />
                        </div>
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/blog/:id" >
                        <BlogDetails />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div >
    ) ;
}

export default App;
