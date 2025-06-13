
import './App.scss';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Header from './components/Header';
import Mainslider from './components/Mainslider';
import Secondslider from './components/Secondslider';
import Thirdslider from './components/Thirdslider';

function App() {
  return (
    <div id='wrap'>
      <Header></Header>
      
      <Mainslider></Mainslider>
      <Secondslider></Secondslider>
      <Banner></Banner>
      <Banner2></Banner2>
      <Thirdslider></Thirdslider>


    </div>

  );
}



export default App;
