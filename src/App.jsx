import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CategorySelector from "./components/CategorySelector/CategorySelector.jsx";
import SeriousnessSlider from "./components/SeriousnessSlider/SeriousnessSlider.jsx";
import AdviceCard from "./components/AdviceCard/AdviceCard.jsx";



function App(){
return (
  <div className="app">
  <Header/>
  <CategorySelector/>
  
  <SeriousnessSlider/>
  <AdviceCard/>
  <Footer/>
 </div>
)
 
}

export default App;
    