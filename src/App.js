import { useState } from 'react';
import Header from './components/header';
import MenuResponsive from './components/menu_responsive';
import Footer from './components/footer';

function App() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div>      
      <Header onShowSecond={() => setShowSecond(!showSecond)} />

      {showSecond && <MenuResponsive activeMenu={showSecond}/>}

      <Footer/>
    </div>
  );
}

export default App;
