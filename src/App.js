import './App.css';
import NavBar from './components/navigationBar/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ShopPage from './pages/shopPage/ShopPage';
import WorkshopsPage from './pages/workshopsPage/WorkshopsPage';
import ContactPage from './pages/contactPage/ContactPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" exact element = {<HomePage/>}/>
          <Route path = "/about" exact element = {<AboutPage/>}/>
          <Route path = "/shop" exact element = {<ShopPage/>}/>
          <Route path = "/workshops" exact element = {<WorkshopsPage/>}/>
          <Route path = "/contact" exact element = {<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
