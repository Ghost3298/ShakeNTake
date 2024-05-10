import './App.css';
import Navigation from './components/Nav';
import MyCarousel from './components/MyCarousel';
import Footer from './components/Footer';
import CategoriesDisplay from './components/CategoriesDisplay';
import './style.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <MyCarousel />
        <h1>Hello</h1>
        <div className="DisplaySpace">
          <CategoriesDisplay/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
