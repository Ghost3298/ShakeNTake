import './App.css';
import Navigation from './components/Nav';
import MyCarousel from './components/MyCarousel';
import Footer from './components/Footer';
import CategoriesDisplay from './components/CategoriesDisplay';
import Paragraph from './components/Paragraph';
import './style.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <MyCarousel />
        <div className="DisplaySpace">
          <CategoriesDisplay/>
        </div>

        <div style={{ marginTop : "60px" }}>
          <Paragraph 
            text="Prioritize information from reliable, professional sources before purchasing any products. Our experts are readily available to guide you and address all your inquiries, ensuring you make informed choices." 
            alt="Reliability" 
            title="Reliability" 
            image="images/paragraphs/reliability.png" 
          />
          <Paragraph
            text="Ensure all products purchased are from original, certified brands. Our products are guaranteed authentic, providing you with the highest quality supplements for your health needs."
            alt="Quality"
            title="Quality"
            image="images/paragraphs/quality.png"
          />
          <Paragraph
            text="Customize your supplement regimen to align with your goals and your body's specifications. Our experts tailor products specifically to your individual needs, ensuring optimal results and satisfaction."
            alt="Tailoring"
            title="Tailoring"
            image="images/paragraphs/tailored.png"
          />
        </div>

        <Footer />
    </div>
  );
}


export default App;
