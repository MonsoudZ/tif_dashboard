import Api from "./components/API call/Api"
import './App.css';
// import Card from "./components/card/card"
import Blog from "./components/card/Blog"
import Header from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        < Api />
        < Blog />
        <Footer />
    </div>
  );
}

export default App;
